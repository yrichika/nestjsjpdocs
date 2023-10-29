import { TocItem } from '@/types/TocItem'

export default function tocItems(): TocItem[] {
  return [
    {
      section: 'INTRODUCTION',
      sectionUrl: '',
      documents: [],
    },
    {
      section: 'OVERVIEW',
      documents: [
        { title: 'First Steps', url: 'first-steps' },
        { title: 'Controllers', url: 'controllers' },
        { title: 'Providers', url: 'providers' },
      ],
    },
    {
      section: 'FUNDAMENTALS',
      documents: [
        { title: 'Custom providers', url: 'custom-providers' },
        { title: 'Asynchronous providers', url: 'asynchronous-providers' },
      ],
    },
  ]
}
