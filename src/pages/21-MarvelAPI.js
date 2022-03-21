import { Header } from '@doamin/21-MarvelAPI'
import { DEFAULT_RESULT } from '@data/defaultValue'

export default function App({ targetEl }) {
  new Header({
    targetEl,
  })
  new Section({
    targetEl,
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
}
