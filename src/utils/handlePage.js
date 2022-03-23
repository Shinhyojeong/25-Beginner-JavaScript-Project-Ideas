import {
  HexColors,
  RandomQuoteGenerator,
  TheMessage,
  Counter,
  ImageCarousel,
  DigitalClock,
  Calculator,
  GroceryList,
  TipCalculator,
  Flashcards,
  ToDoList,
  StickyNotes,
  Timer,
  Math,
  UnsplashApi,
  Typewriter,
  SquareCards,
  WeatherApplication,
  WekipediaApi,
  MarvelApi,
  QuizPro,
} from '@pages'
import { ROUTE_URL } from '@constant'

export const appendPage = (targetEl) => {
  const { pathname } = window.location
  const nextUrl = pathname.replace('/', '')
  targetEl.innerHTML = ``

  switch (nextUrl) {
    case ROUTE_URL.HEX_COLORS:
      new HexColors()
      break
    case ROUTE_URL.RANDOM_QUOTE_GENERATOR:
      new RandomQuoteGenerator({ targetEl })
      break
    case ROUTE_URL.THE_MESSAGE:
      new TheMessage()
      break
    case ROUTE_URL.COUNTER:
      new Counter({ targetEl })
      break
    case ROUTE_URL.IMAGE_CAROUSEL:
      new ImageCarousel()
      break
    case ROUTE_URL.DIGITAL_CLOCK:
      new DigitalClock({ targetEl })
      break
    case ROUTE_URL.CALCULATOR:
      new Calculator()
      break
    case ROUTE_URL.GROCERY_LIST:
      new GroceryList({ targetEl })
      break
    case ROUTE_URL.TIP_CALCULATOR:
      new TipCalculator()
      break
    case ROUTE_URL.FLASHCARD:
      new Flashcards({ targetEl })
      break
    case ROUTE_URL.TO_DO_LIST:
      new ToDoList({ targetEl })
      break
    case ROUTE_URL.STICKY_NOTES:
      new StickyNotes({ targetEl })
      break
    case ROUTE_URL.TIMER:
      new Timer({ targetEl })
      break
    case ROUTE_URL.MATH:
      new Math({ targetEl })
      break
    case ROUTE_URL.UNSPLASH_API:
      new UnsplashApi({ targetEl })
      break
    case ROUTE_URL.TYPEWRITER:
      new Typewriter({ targetEl })
      break
    // case ROUTE_URL.TO_DO_LIST:
    //   new SquareCards({ targetEl })
    //   break
    // case ROUTE_URL.TO_DO_LIST:
    //   new WeatherApplication({ targetEl })
    //   break
    // case ROUTE_URL.TO_DO_LIST:
    //   new WekipediaApi({ targetEl })
    //   break
    // case ROUTE_URL.TO_DO_LIST:
    //   new MarvelApi({ targetEl })
    //   break
    // case ROUTE_URL.TO_DO_LIST:
    //   new QuizPro({ targetEl })
    //   break
    default:
      new SquareCards({ targetEl })
      break
  }
}
