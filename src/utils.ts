import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarAlt,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

export function loadFontAwesome() {
  library.add(faCalendarAlt, faMapMarkedAlt);
}
