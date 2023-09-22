export const resourcePlaylist = {
  name: 'resourcePlaylist',
  title: 'Resource Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Playlist Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'resource'
            }
          ]
        }
      ]
    }
  ]
}