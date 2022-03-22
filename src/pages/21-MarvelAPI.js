import { Header } from '@domain/21-MarvelApi'
import { DEFAULT_RESULT } from '@data/dummy/defaultValue'
import { createElement } from '@utils/handleElement'

export default function MarvelApi({ targetEl }) {
  const marvelApi = createElement()

  new Header({
    targetEl: marvelApi,
  })
  new Section({
    targetEl: marvelApi,
    initialState: {
      elClassName: 'wrapper character',
      searchList: [
        {
          inputPlaceholder: 'CHARACTER NAME...',
          btnContent: 'SEARCH',
        },
      ],
      cardInfo: {
        title: 'Character',
        content:
          'Fetch the image and ID of your favorite Marvel character. You can use the ID to search for their comic books!',
        imgUrl: '/21-MarvelAPI/src/assets/image/img_section_character.jpg',
        imgAlt: 'character-img',
      },
      fetchUrl: 'comics?upc=',
      defaultResult: DEFAULT_RESULT,
    },
  })

  targetEl.append(marvelApi)
}
