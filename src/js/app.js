import Collapse from './Collapse';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const collapse = new Collapse('.collapse', content);
collapse.bindToDOM();

const callbackChat = new CallbackChat('.callback-chat');
callbackChat.bindToDOM();

const liker = new Liker('.liker');
liker.bindToDOM();
