export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'date',
      type: 'datetime',
    },
    {
      name: 'place',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { value: 'personalInterest', title: 'Personal Interest' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
          { value: 'educational', title: 'Educational' },
        ],
      },
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
};
