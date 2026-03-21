# Contributing to Portfolio

Thank you for your interest in contributing to Portfolio! 🎉

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, Bun/Node version, browser)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:

- A clear description of the feature
- Why it would be useful
- Potential implementation approach (if you have ideas)

### Pull Requests

1. **Fork the repository** on GitHub, then clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Add upstream remote** (optional, for syncing):

   ```bash
   git remote add upstream https://github.com/Abdullah-dev0/portfolio.git
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

5. **Test your changes**

   ```bash
   bun run lint
   bun run format:check
   bun run type:check
   bun run build
   ```

   Note: Pre-commit hooks (Husky + lint-staged) will run lint and format on staged files automatically.

6. **Commit your changes**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

   Use conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

7. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots for UI changes

## Code Style

- Use TypeScript for type safety
- Follow the ESLint configuration
- Format code with Prettier before committing (`bun run format`)
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

## Project Structure

Please maintain the existing project structure:

- Configuration files in `src/config/`
- Components in appropriate subdirectories
- MDX content in `content/`
- Static assets in `public/`

## Pre-submit Checklist

Before submitting:

1. Run `bun run lint` to check for linting errors
2. Run `bun run format:check` to verify formatting
3. Run `bun run type:check` for TypeScript
4. Run `bun run build` to ensure the build succeeds
5. Test your changes in both light and dark modes
6. Check responsive design on different screen sizes

## Questions?

Feel free to:

- Open a discussion on GitHub
- Reach out on [Twitter/X](https://x.com/Abdul_ah14)
- Email: abdulah14200@gmail.com

Thank you for contributing! 🚀
