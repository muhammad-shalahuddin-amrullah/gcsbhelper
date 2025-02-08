# Helper ???

## Deploying to Cloudflare Pages Dev

### Setting up Cloudflare Pages

1. Log in to your Cloudflare account.
2. Navigate to the "Pages" section in the Cloudflare dashboard.
3. Click on "Create a project".
4. Connect your GitHub repository to Cloudflare Pages.
5. Select the repository containing your application.
6. Configure the build settings as needed.

### Configuring Environment Variables

1. In the Cloudflare Pages dashboard, go to the "Settings" tab of your project.
2. Click on "Environment Variables".
3. Add the following environment variables:
   - `GITHUB_TOKEN`: Your GitHub token.
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token.
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID.

### Deploying the Application using GitHub Actions

1. Ensure that the `.github/workflows/publish.yml` file is present in your repository.
2. The workflow file should contain the following steps:
   - Checkout the code.
   - Install dependencies.
   - Build the application.
   - Publish to Cloudflare Pages.

### Obtaining Cloudflare API Token and Account ID

1. Log in to your Cloudflare account.
2. Navigate to the "API Tokens" section in the Cloudflare dashboard.
3. Click on "Create Token".
4. Select the "Edit Cloudflare Pages" template.
5. Generate the token and copy it.
6. To find your Cloudflare account ID, go to the "Overview" section of your Cloudflare dashboard.
7. Your account ID will be displayed under the "API" section.
