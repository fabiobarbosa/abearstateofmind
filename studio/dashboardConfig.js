export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddf118feb79c5a95ee18502',
                  title: 'Sanity Studio',
                  name: 'abearstateofmind-studio',
                  apiId: 'b6ef597c-9ab7-44d5-8b6d-77148611f53c'
                },
                {
                  buildHookId: '5ddf118fdd6ef9dc181bd80d',
                  title: 'Blog Website',
                  name: 'abearstateofmind',
                  apiId: 'e32a03c2-8b42-4c38-8483-66383d93748c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fabiobarbosa/abearstateofmind',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://abearstateofmind.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
