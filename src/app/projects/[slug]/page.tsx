import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

import { allProjects } from "content-collections";
import { ArrowLeft } from "lucide-react";

import BackToTop from "@/components/common/BackToTop";
import Container from "@/components/common/Container";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/Meta";

interface ProjectCaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all project case studies
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project case study
export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project || !project.isPublished) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Project Case Study`,
      description: project.description,
      images: project.image ? [project.image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Project Case Study`,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project || !project.isPublished) {
    notFound();
  }

  // Get the compiled MDX code
  const mdxCode = project.mdx;

  // Get navigation (previous/next)
  const publishedProjects = allProjects.filter((p) => p.isPublished);

  const currentIndex = publishedProjects.findIndex((p) => p.slug === slug);

  const navigation = {
    previous:
      currentIndex > 0
        ? {
            title: publishedProjects[currentIndex - 1].title,
            slug: publishedProjects[currentIndex - 1].slug,
          }
        : null,
    next:
      currentIndex < publishedProjects.length - 1
        ? {
            title: publishedProjects[currentIndex + 1].title,
            slug: publishedProjects[currentIndex + 1].slug,
          }
        : null,
  };

  // Get related projects based on shared technologies
  const currentTechs = project.technologies.map((t) => t.toLowerCase());
  const relatedProjects = publishedProjects
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      project: p,
      score: p.technologies.filter((t) =>
        currentTechs.includes(t.toLowerCase())
      ).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((item) => item.project);

  return (
    <Container className="py-16">
      <div className="space-y-12">
        {/* Back Button */}
        <div>
          <Button variant="ghost" asChild className="group">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>
        <BackToTop />

        {/* Project Content */}
        <ProjectContent project={project} mdxCode={mdxCode} />

        {/* Project Navigation */}
        <ProjectNavigation
          previous={navigation.previous}
          next={navigation.next}
        />

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <Separator />
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Related Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedProjects.map((relatedProject) => (
                  <div
                    key={relatedProject.slug}
                    className="group bg-card hover:bg-muted/50 rounded-lg border p-6 transition-colors"
                  >
                    <Link href={`/projects/${relatedProject.slug}`}>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="group-hover:text-primary text-lg font-semibold">
                            {relatedProject.title}
                          </h3>
                          <div className="text-xs">
                            <div
                              className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                                relatedProject.status === "completed"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : relatedProject.status === "in-progress"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                              }`}
                            >
                              {relatedProject.status.charAt(0).toUpperCase() +
                                relatedProject.status.slice(1)}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm">
                          {relatedProject.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {relatedProject.technologies
                            .slice(0, 3)
                            .map((tech) => (
                              <span
                                key={tech}
                                className="bg-muted rounded px-2 py-1 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          {relatedProject.technologies.length > 3 && (
                            <span className="bg-muted rounded px-2 py-1 text-xs">
                              +{relatedProject.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to Projects CTA */}
        <div className="text-center">
          <Separator className="mb-8" />
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
