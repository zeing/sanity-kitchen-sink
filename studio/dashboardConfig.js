export default {
  widgets: [
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
                  buildHookId: '5f7a965f243c6400bf0e2d51',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gyhp2fx2',
                  apiId: '9caa5ebc-ba76-4579-84a6-53ee8a424d02'
                },
                {
                  buildHookId: '5f7a965f3d4ad70104837814',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-72e795b5',
                  apiId: 'd91a4642-6220-42fc-a31d-073257ea74a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zeing/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-72e795b5.netlify.app', category: 'apps'}
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
