// Sass Files
import "./index.scss";

// Material functions
// i.e. buttons
import {
    MDCRipple
} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// i.e. textfields
import {
    MDCTextField
} from '@material/textfield';

const emailTextField = new MDCTextField(document.querySelector('#email.mdc-text-field'));
const passwordTextField = new MDCTextField(document.querySelector('#password.mdc-text-field'));