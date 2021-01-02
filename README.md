# guillermoarriadevoe.com

A progressive web application featuring my work and who I am. Designed and coded by yours truly using Gatsby, React, SCSS, GraphQL, and Contentful for content delivery.

Feel free to use this project for your own website. Getting started is a breeze.

## 🚀 Quick start

1. **Clone Project**

2.  **Add Contentful Environment Variables**

    First create a [Contentful](https://www.contentful.com) account. Then create a new [Personal Access Token](https://www.contentful.com/developers/docs/references/authentication/#the-content-management-api). When you're done, create a new .env file in the main app directory with the following two variables. 

    ```sh
    # sample values
    CONTENTFUL_ACCESS_TOKEN=xz7BD_x3-0abv-cilmaq0c2fFHblKrZZXaha5k6QM
    CONTENTFUL_SPACE_ID=k10e2ml19krm8
    ```

3.  **Start Developing**

    Navigate into your new site’s directory and start it up. Replace GraphQL queries where necessary.

    ```sh
    cd your-new-portfolio/
    gatsby develop
    ```

4. **Publishing Content**
    
    Blog pages can be created by publishing content under a content model titled **Blog Post.**  Portfolio project entries can be created by publishing content under a content model titled **Portfolio Project.** Refer to the GraphQL queries found in the "pages" directory for all currently included content model fields.
