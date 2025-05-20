/**
 * Payment Form Web Component
 * Reusable credit card payment form with validation
 */
class PaymentForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.setupEventListeners();
    
    // Set initial contrast mode
    const savedMode = localStorage.getItem('payment-contrast-mode') || 'normal';
    this.setContrastMode(savedMode);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: inherit;
          --focus-outline-width: 2px;
          --focus-outline-offset: 2px;
          --focus-outline-color: var(--primary, #088e54);
          --focus-outline-color-rgb: 8, 142, 84;
          --focus-animation-duration: 0.3s;
          --focus-pulse-opacity-min: 0.4;
          --focus-pulse-opacity-max: 0.8;
          --focus-glow-blur: 4px;
          --focus-glow-spread: 0px;
          --focus-scale: 1.02;
          --focus-transition: all var(--focus-animation-duration, 0.3s) cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Fokus-Animationen */
        @keyframes focus-pulse {
          0% {
            box-shadow: 0 0 0 var(--focus-outline-width) rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-min, 0.4));
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1.5) rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-max, 0.8)),
                        0 0 var(--focus-glow-blur) var(--focus-glow-spread) rgba(var(--focus-outline-color-rgb), 0.25);
            transform: scale(var(--focus-scale));
          }
          100% {
            box-shadow: 0 0 0 var(--focus-outline-width) rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-min, 0.4));
            transform: scale(1);
          }
        }

        @keyframes focus-outline-pulse {
          0% {
            outline-offset: var(--focus-outline-offset);
            outline-color: rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-min, 0.4));
          }
          50% {
            outline-offset: calc(var(--focus-outline-offset) * 1.5);
            outline-color: rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-max, 0.8));
          }
          100% {
            outline-offset: var(--focus-outline-offset);
            outline-color: rgba(var(--focus-outline-color-rgb), var(--focus-pulse-opacity-min, 0.4));
          }
        }
        
        /* Grundstil */
        .my-payment-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-lg, 0.5rem);
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
          padding: var(--spacer-xl, 1rem);
          background-color: var(--white, #fff);
          border-radius: 8px;
          box-shadow: var(--shadow, 0px 2px 18px 0px rgba(0, 0, 0, 0.3));
        }
        
        /* Dark Mode */
        .contrast-dark {
          background-color: var(--dark, #262626);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--border-color, #ccc);
          color: var(--light, #e6e6e6);
          
          --focus-outline-color: var(--success, #0b992c);
          --focus-outline-color-rgb: 11, 153, 44;
        }
        
        /* High Contrast Mode */
        .contrast-high {
          --focus-outline-color: #000;
          --focus-outline-color-rgb: 0, 0, 0;
          --focus-outline-width: 3px;
        }
        
        /* Higher Contrast Mode */
        .contrast-higher {
          background-color: #fff;
          border: 3px solid #000;
          box-shadow: none;
          color: #000;
          
          --focus-outline-color: #000;
          --focus-outline-color-rgb: 0, 0, 0;
          --focus-outline-width: 4px;
          --focus-outline-offset: 4px;
        }
        
        .my-payment-header {
          text-align: center;
          margin-bottom: var(--spacer-lg, 0.5rem);
          padding-bottom: var(--spacer-lg, 0.5rem);
          border-bottom: 1px solid var(--border-color, #ccc);
        }
        
        .contrast-higher .my-payment-header {
            border-bottom: 2px solid #000;
        }
        
        .my-payment-title {
          margin: 0 0 var(--spacer-md, 0.25rem);
          font-size: 1.5rem;
          color: var(--primary, #088e54);
        }
        
        .contrast-dark .my-payment-title {
            color: var(--success, #0b992c);
        }
        
        .contrast-higher .my-payment-title {
            color: #000;
            font-weight: 700;
        }
        
        .my-payment-group {
          position: relative;
          margin-bottom: var(--spacer-lg, 0.5rem);
        }
        
        .my-payment-label {
          display: block;
          margin-bottom: var(--spacer-md, 0.25rem);
          font-weight: 500;
          color: var(--dark, #262626);
        }
        
        .contrast-dark .my-payment-label {
            color: var(--light, #e6e6e6);
        }
        
        .contrast-higher .my-payment-label {
            color: #000;
            font-weight: 700;
            text-decoration: underline;
        }
        
        .my-payment-input {
          width: 100%;
          padding: var(--spacer-lg, 0.5rem);
          border: 1px solid var(--border-color, #ccc);
          border-radius: 4px;
          font-size: 1rem;
          transition: var(--focus-transition);
          background-color: var(--white, #fff);
          color: var(--dark, #262626);
        }
          
        .my-payment-input:focus-visible {
          outline: none;
          border-color: var(--focus-outline-color, var(--info, #0b8fa4));
          animation: focus-pulse 2s infinite;
        }
        
        .contrast-high .my-payment-input:focus-visible, 
        .contrast-higher .my-payment-input:focus-visible {
          border-color: #000;
          border-width: 2px;
          animation: none;
          box-shadow: none;
          outline: var(--focus-outline-width) solid #000;
          outline-offset: var(--focus-outline-offset);
        }
        
        .my-payment-input.is-invalid {
          border-color: var(--error, #a70e1e);
          background-color: rgba(167, 14, 30, 0.03);
        }
        
        .contrast-higher .my-payment-input.is-invalid {
          border: 3px dashed #000;
          background-color: #fff;
        }
        
        .my-payment-input.is-valid {
          border-color: var(--success, #0b992c);
          background-color: rgba(11, 153, 44, 0.03);
        }
        
        .contrast-higher .my-payment-input.is-valid {
          border: 3px solid #000;
          background-color: #fff;
        }
        
        .contrast-dark .my-payment-input {
          background-color: var(--dark, #262626);
          color: var(--light, #e6e6e6);
          border-color: var(--light, #e6e6e6);
        }
        
        .contrast-high .my-payment-input {
          border: 2px solid #000;
        }
        
        .contrast-higher .my-payment-input {
          border: 2px solid #000;
          font-weight: bold;
        }
        
        .my-payment-card-number {
          position: relative;
        }
        
        .card-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          opacity: 0.7;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary, #088e54);
        }
        
        .contrast-dark .card-icon {
            color: var(--light, #e6e6e6);
        }
        
        .contrast-high .card-icon, .contrast-higher .card-icon {
            color: #000;
            opacity: 1;
            font-weight: bold;
        }
        
        .my-payment-row {
          display: flex;
          gap: var(--spacer-lg, 0.5rem);
        }
        
        @media (max-width: 576px) {
          .my-payment-row {
            flex-direction: column;
          }
        }
        
        .my-payment-row .my-payment-group {
          flex: 1;
        }
        
        .my-payment-feedback {
          display: block;
          margin-top: var(--spacer-sm, 0.125rem);
          font-size: 0.85rem;
          padding: var(--spacer-sm, 0.125rem);
          border-radius: 4px;
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .my-payment-feedback.valid {
          color: var(--on-success, #fff);
          background-color: var(--success, #0b992c);
        }
        
        .contrast-higher .my-payment-feedback.valid {
          color: #fff;
          background-color: #000;
          border: 2px solid #000;
          font-weight: bold;
        }
        
        .my-payment-feedback.invalid {
          color: var(--on-error, #fff);
          background-color: var(--error, #a70e1e);
        }
        
        .contrast-higher .my-payment-feedback.invalid {
          color: #fff;
          background-color: #000;
          border: 2px dashed #000;
          font-weight: bold;
        }
        
        .my-payment-feedback.info {
          color: var(--on-info, #fff);
          background-color: var(--info, #0b8fa4);
        }
        
        .contrast-higher .my-payment-feedback.info {
          color: #fff;
          background-color: #000;
          border: 2px dotted #000;
        }
        
        .my-payment-submit {
          display: block;
          width: 100%;
          padding: var(--spacer-lg, 0.5rem);
          border: none;
          border-radius: 4px;
          background-color: var(--success, #0b992c);
          color: var(--on-success, #fff);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--focus-transition);
          margin-top: var(--spacer-xl, 1rem);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .my-payment-submit:hover {
          background-color: #068124;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .contrast-higher .my-payment-submit:hover {
          transform: none;
          background-color: #000;
          box-shadow: none;
        }
        
        .my-payment-submit:focus-visible {
          animation: focus-pulse 2s infinite;
          outline: none;
        }
        
        .contrast-high .my-payment-submit:focus-visible, 
        .contrast-higher .my-payment-submit:focus-visible {
          animation: none;
          outline: 3px solid #000;
          outline-offset: 3px;
          box-shadow: none;
        }
        
        .my-payment-submit:disabled {
          background-color: var(--grey, #808080);
          color: var(--on-grey, #fff);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .contrast-higher .my-payment-submit:disabled {
          background-color: #fff;
          color: #000;
          border: 2px solid #000;
          opacity: 0.5;
        }
        
        .contrast-dark .my-payment-submit {
          background-color: var(--success, #0b992c);
          box-shadow: 0 0 10px rgba(11, 153, 44, 0.3);
        }
        
        .contrast-high .my-payment-submit {
          box-shadow: none;
          border: 2px solid #000;
        }
        
        .contrast-higher .my-payment-submit {
          background-color: #000;
          color: #fff;
          border: 3px solid #000;
          box-shadow: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .my-payment-sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        /* Contrast Mode Switcher */
        .my-payment-contrast-switcher {
          display: flex;
          gap: var(--spacer-sm, 0.125rem);
          margin-top: var(--spacer-lg, 0.5rem);
          justify-content: center;
        }
        
        .contrast-btn {
          background: none;
          border: 1px solid var(--border-color, #ccc);
          border-radius: 4px;
          padding: var(--spacer-sm, 0.125rem) var(--spacer-md, 0.25rem);
          cursor: pointer;
          font-size: 0.8rem;
          transition: var(--focus-transition);
        }
        
        .contrast-btn:hover {
          border-color: var(--primary, #088e54);
        }
        
        .contrast-btn:focus-visible {
          animation: focus-outline-pulse 2s infinite;
          outline: var(--focus-outline-width) solid var(--focus-outline-color);
          outline-offset: var(--focus-outline-offset);
        }
        
        .contrast-btn.active {
          background-color: var(--primary, #088e54);
          color: var(--on-primary, #fff);
          border-color: var(--primary, #088e54);
        }
        
        .contrast-higher .contrast-btn.active {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }
        
        .contrast-higher .contrast-btn {
          border: 2px solid #000;
          font-weight: bold;
        }
        
        /* Extra Animationen */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <div class="my-payment-form" id="paymentForm">
        <div class="my-payment-header">
          <h2 class="my-payment-title">Zahlungsinformationen</h2>
          <p>Geben Sie Ihre Kreditkartendaten ein</p>
        </div>

        <form id="creditCardForm" novalidate>
          <div class="my-payment-group">
            <label for="cardNumber" class="my-payment-label">Kreditkartennummer</label>
            <div class="my-payment-card-number">
              <input 
                type="text" 
                id="cardNumber" 
                class="my-payment-input" 
                placeholder="1234 5678 9012 3456" 
                autocomplete="cc-number"
                aria-describedby="cardNumberFeedback"
                maxlength="19"
                required
              >
              <div class="card-icon" id="cardTypeIcon" aria-hidden="true"></div>
            </div>
            <div id="cardNumberFeedback" class="my-payment-feedback info">
              Geben Sie eine gültige 16-stellige Kreditkartennummer ein.
            </div>
          </div>

          <div class="my-payment-row">
            <div class="my-payment-group">
              <label for="expiryDate" class="my-payment-label">Gültig bis</label>
              <input 
                type="text" 
                id="expiryDate" 
                class="my-payment-input" 
                placeholder="MM/JJ" 
                autocomplete="cc-exp"
                aria-describedby="expiryFeedback"
                maxlength="5"
                required
              >
              <div id="expiryFeedback" class="my-payment-feedback info">
                Format: MM/JJ (z.B. 12/25)
              </div>
            </div>

            <div class="my-payment-group">
              <label for="cvv" class="my-payment-label">Sicherheitscode (CVV)</label>
              <input 
                type="text" 
                id="cvv" 
                class="my-payment-input" 
                placeholder="123" 
                autocomplete="cc-csc"
                aria-describedby="cvvFeedback"
                maxlength="4"
                required
              >
              <div id="cvvFeedback" class="my-payment-feedback info">
                3-4 stelliger Code auf der Rückseite Ihrer Karte
              </div>
            </div>
          </div>

          <div class="my-payment-group">
            <label for="cardholderName" class="my-payment-label">Name des Karteninhabers</label>
            <input 
              type="text" 
              id="cardholderName" 
              class="my-payment-input" 
              placeholder="Name auf der Karte" 
              autocomplete="cc-name"
              aria-describedby="nameFeedback"
              required
            >
            <div id="nameFeedback" class="my-payment-feedback info">
              Name wie auf der Karte angegeben
            </div>
          </div>

          <button type="submit" class="my-payment-submit" id="submitButton" disabled>
            Zahlung abschließen
          </button>

          <!-- Status-Meldungen für Screenreader -->
          <div aria-live="polite" class="my-payment-sr-only" id="validationStatus"></div>
          
          <!-- Contrast Mode Switcher -->
          <div class="my-payment-contrast-switcher">
            <button type="button" class="contrast-btn active" data-mode="normal">Normal</button>
            <button type="button" class="contrast-btn" data-mode="dark">Dark</button>
            <button type="button" class="contrast-btn" data-mode="high">High Contrast</button>
            <button type="button" class="contrast-btn" data-mode="higher">Höchster Kontrast</button>
          </div>
        </form>
      </div>
    `;
  }

  setupEventListeners() {
    const shadow = this.shadowRoot;
    const form = shadow.getElementById('creditCardForm');
    const cardNumber = shadow.getElementById('cardNumber');
    const expiryDate = shadow.getElementById('expiryDate');
    const cvv = shadow.getElementById('cvv');
    const cardholderName = shadow.getElementById('cardholderName');
    const submitButton = shadow.getElementById('submitButton');
    const cardTypeIcon = shadow.getElementById('cardTypeIcon');
    const validationStatus = shadow.getElementById('validationStatus');
    const paymentForm = shadow.getElementById('paymentForm');
    const contrastButtons = shadow.querySelectorAll('.contrast-btn');

    // Feedback elements
    const cardNumberFeedback = shadow.getElementById('cardNumberFeedback');
    const expiryFeedback = shadow.getElementById('expiryFeedback');
    const cvvFeedback = shadow.getElementById('cvvFeedback');
    const nameFeedback = shadow.getElementById('nameFeedback');

    // Contrast Mode Switcher
    contrastButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.setContrastMode(mode);
      });
    });

    // Credit card validation rules
    const cardPatterns = {
      visa: {
        pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
        icon: '💳'  // Placeholder - would be a real image in production
      },
      mastercard: {
        pattern: /^5[1-5][0-9]{14}$/,
        icon: '💳'  // Placeholder
      },
      amex: {
        pattern: /^3[47][0-9]{13}$/,
        icon: '💳'  // Placeholder
      },
      discover: {
        pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        icon: '💳'  // Placeholder
      }
    };

    // Card number formatting
    cardNumber.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      let formattedValue = '';
      
      // Format in groups of 4
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      
      e.target.value = formattedValue;
      this.validateCardNumber(cardNumber, cardNumberFeedback, cardTypeIcon, cardPatterns);
    });

    // Expiry date formatting
    expiryDate.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 2) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2);
      } else {
        e.target.value = value;
      }
      
      this.validateExpiryDate(expiryDate, expiryFeedback);
    });

    // CVV validation (numbers only)
    cvv.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
      this.validateCVV(cvv, cvvFeedback);
    });

    // Cardholder name validation
    cardholderName.addEventListener('input', () => {
      this.validateCardholderName(cardholderName, nameFeedback);
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // This would be payment processing in a real application
      this.dispatchEvent(new CustomEvent('payment-submitted', {
        bubbles: true,
        composed: true,
        detail: {
          cardNumber: cardNumber.value.replace(/\s/g, ''),
          expiryDate: expiryDate.value,
          cvv: cvv.value,
          cardholderName: cardholderName.value
        }
      }));
      
      // Reset form
      form.reset();
      
      // Reset validation displays
      [cardNumber, expiryDate, cvv, cardholderName].forEach(element => {
        element.classList.remove('is-valid', 'is-invalid');
      });
      
      this.setInfoState(cardNumber, cardNumberFeedback, 'Geben Sie eine gültige 16-stellige Kreditkartennummer ein.');
      this.setInfoState(expiryDate, expiryFeedback, 'Format: MM/JJ (z.B. 12/25)');
      this.setInfoState(cvv, cvvFeedback, '3-4 stelliger Code auf der Rückseite Ihrer Karte');
      this.setInfoState(cardholderName, nameFeedback, 'Name wie auf der Karte angegeben');
      
      cardTypeIcon.textContent = '';
      submitButton.disabled = true;
    });
  }

  // Set contrast mode
  setContrastMode(mode) {
    const paymentForm = this.shadowRoot.getElementById('paymentForm');
    const contrastButtons = this.shadowRoot.querySelectorAll('.contrast-btn');
    
    // Remove all previous contrast classes
    paymentForm.classList.remove('contrast-normal', 'contrast-dark', 'contrast-high', 'contrast-higher');
    
    // Add the new contrast class
    if (mode !== 'normal') {
      paymentForm.classList.add(`contrast-${mode}`);
    } else {
      paymentForm.classList.add('contrast-normal');
    }
    
    // Update active buttons
    contrastButtons.forEach(btn => {
      if (btn.dataset.mode === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Save the setting in localStorage for persistence
    localStorage.setItem('payment-contrast-mode', mode);
  }

  // Validation functions
  validateCardNumber(cardNumber, feedback, iconElement, cardPatterns) {
    const value = cardNumber.value.replace(/\s/g, '');
    
    if (value.length < 13) {
      this.setInvalidState(cardNumber, feedback, 'Bitte geben Sie eine vollständige Kreditkartennummer ein.');
      iconElement.textContent = '';
      return false;
    }
    
    // Luhn algorithm for credit card validation
    if (!this.isValidLuhn(value)) {
      this.setInvalidState(cardNumber, feedback, 'Ungültige Kreditkartennummer. Bitte überprüfen Sie Ihre Eingabe.');
      iconElement.textContent = '';
      return false;
    }
    
    // Identify card type
    let cardType = null;
    for (const [type, data] of Object.entries(cardPatterns)) {
      if (data.pattern.test(value)) {
        cardType = type;
        iconElement.textContent = data.icon;
        break;
      }
    }
    
    if (cardType) {
      this.setValidState(cardNumber, feedback, `${cardType.charAt(0).toUpperCase() + cardType.slice(1)}-Karte erkannt.`);
      return true;
    } else {
      this.setInvalidState(cardNumber, feedback, 'Kreditkartentyp nicht erkannt. Unterstützte Karten: Visa, Mastercard, Amex, Discover.');
      iconElement.textContent = '';
      return false;
    }
  }

  validateExpiryDate(expiryDate, feedback) {
    const value = expiryDate.value;
    
    if (!/^\d{2}\/\d{2}$/.test(value)) {
      this.setInvalidState(expiryDate, feedback, 'Bitte geben Sie das Ablaufdatum im Format MM/JJ ein.');
      return false;
    }
    
    const [month, year] = value.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months start at 0
    
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      this.setInvalidState(expiryDate, feedback, 'Ungültiger Monat. Bitte geben Sie einen Wert zwischen 01 und 12 ein.');
      return false;
    }
    
    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      this.setInvalidState(expiryDate, feedback, 'Das eingegebene Datum liegt in der Vergangenheit.');
      return false;
    }
    
    this.setValidState(expiryDate, feedback, 'Gültiges Ablaufdatum.');
    return true;
  }

  validateCVV(cvv, feedback) {
    const value = cvv.value;
    
    if (!/^\d{3,4}$/.test(value)) {
      this.setInvalidState(cvv, feedback, 'Der Sicherheitscode muss aus 3-4 Ziffern bestehen.');
      return false;
    }
    
    this.setValidState(cvv, feedback, 'Gültiger Sicherheitscode.');
    return true;
  }

  validateCardholderName(cardholderName, feedback) {
    const value = cardholderName.value.trim();
    
    if (value.length < 3) {
      this.setInvalidState(cardholderName, feedback, 'Bitte geben Sie den vollständigen Namen ein, wie er auf der Karte steht.');
      return false;
    }
    
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(value)) {
      this.setInvalidState(cardholderName, feedback, 'Der Name darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten.');
      return false;
    }
    
    this.setValidState(cardholderName, feedback, 'Gültiger Name.');
    return true;
  }

  // Helper functions for validation
  isValidLuhn(number) {
    let sum = 0;
    let shouldDouble = false;
    
    // From right to left
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return (sum % 10) === 0;
  }

  setValidState(element, feedbackElement, message) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    feedbackElement.textContent = message;
    feedbackElement.className = 'my-payment-feedback valid';
    this.updateValidationStatus();
  }

  setInvalidState(element, feedbackElement, message) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    feedbackElement.textContent = message;
    feedbackElement.className = 'my-payment-feedback invalid';
    this.updateValidationStatus();
  }

  setInfoState(element, feedbackElement, message) {
    element.classList.remove('is-valid', 'is-invalid');
    feedbackElement.textContent = message;
    feedbackElement.className = 'my-payment-feedback info';
  }

  updateValidationStatus() {
    const shadow = this.shadowRoot;
    const cardNumber = shadow.getElementById('cardNumber');
    const expiryDate = shadow.getElementById('expiryDate');
    const cvv = shadow.getElementById('cvv');
    const cardholderName = shadow.getElementById('cardholderName');
    const submitButton = shadow.getElementById('submitButton');
    const validationStatus = shadow.getElementById('validationStatus');
    
    const isCardNumberValid = cardNumber.classList.contains('is-valid');
    const isExpiryDateValid = expiryDate.classList.contains('is-valid');
    const isCVVValid = cvv.classList.contains('is-valid');
    const isNameValid = cardholderName.classList.contains('is-valid');
    
    // Enable submit button if all fields are valid
    submitButton.disabled = !(isCardNumberValid && isExpiryDateValid && isCVVValid && isNameValid);
    
    // Update status for screen readers
    if (submitButton.disabled) {
      validationStatus.textContent = 'Bitte füllen Sie alle erforderlichen Felder korrekt aus.';
    } else {
      validationStatus.textContent = 'Formular vollständig und korrekt ausgefüllt. Sie können jetzt fortfahren.';
    }
  }
}

// Define custom element
customElements.define('payment-form', PaymentForm);