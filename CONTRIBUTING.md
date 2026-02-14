# Contributing to Portfolio

Thank you for your interest in contributing to Portfolio! 🎉

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, browser)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:

- A clear description of the feature
- Why it would be useful
- Potential implementation approach (if you have ideas)

### Pull Requests

1. **Fork the repository**

   ```bash
   git clone https://github.com/Abdullah-dev0/portfolio.git
   cd portfolio
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**

   ```bash
   bun run dev
   bun run lint
   bun run build
   ```

5. **Commit your changes**

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

6. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots for UI changes

## Code Style

- Use TypeScript for type safety
- Follow the ESLint configuration
- Format code with Prettier before committing
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

## Project Structure

Please maintain the existing project structure:

- Configuration files in `src/config/`
- Components in appropriate subdirectories
- MDX content in `content/`
- Static assets in `public/`

## Testing

Before submitting:

1. Run `bun run lint` to check for linting errors
2. Run `bun run build` to ensure the build succeeds
3. Test your changes in both light and dark modes
4. Check responsive design on different screen sizes

## Questions?

Feel free to:

- Open a discussion on GitHub
- Reach out on [Twitter/X](https://x.com/Abdul_ah14)
- Email: abdulah14200@gmail.com

Thank you for contributing! 🚀
