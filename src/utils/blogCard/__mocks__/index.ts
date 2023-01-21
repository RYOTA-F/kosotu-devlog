import { IBlogCardData } from '@/types/index'

export const blogCardDataMock: IBlogCardData = {
  url: 'https://www.example.com',
  title: 'Example Title',
  description: 'Example Description',
  image: 'https://www.example.com/image.jpg',
  site: 'Example Site',
}

export const resultHTML = `
    <a href="${blogCardDataMock.url}" target="_blank" rel="noopener noreferrer" class="blogCard">
      <img src="${blogCardDataMock.image}" class="blogCard__img" />
      <span class="blogCard__content">
        <span class="blogCard__title">${blogCardDataMock.title}</span>
        <span class="blogCard__description">${blogCardDataMock.description}</span>
      </span>
      <span class="blogCard__site">${blogCardDataMock.site}</span>
    </a>
  `
