import { CollectionConfig } from 'payload'
import { slateEditor } from '@payloadcms/richtext-slate'

export const Programs: CollectionConfig = {
  slug: 'programs',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'category', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'location', type: 'text' },
    { name: 'published_date', type: 'date', required: true },
    { name: 'range_date', type: 'text' },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'body',
      type: 'richText',
      required: false,
      editor: slateEditor({
        admin: {
          elements: ['h1', 'h2', 'h3', 'link', 'blockquote', 'ul', 'ol', 'upload'],
        },
      }),
    },
  ],
}
