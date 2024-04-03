export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nombre Completo*',
      requiredErrorMsg: 'Es obligatorio'
    },
    lastName: {
      name: 'lastName',
      label: 'Apellido*',
      requiredErrorMsg: 'Es obligatorio'
    },
    address1: {
      name: 'address2',
      label: 'Dirección*',
      requiredErrorMsg: 'Es obligatorio'
    },

    city: {
      name: 'city',
      label: 'Ciudad*',
      requiredErrorMsg: 'Es obligatorio'
    },
    state: {
      name: 'state',
      label: 'Provincia*',
      requiredErrorMsg: 'Es obligatorio'
    },
    zipcode: {
      name: 'zipcode',
      label: 'CP*',
      requiredErrorMsg: 'Es obligatorio',
      invalidErrorMsg: 'Formato de CP inválido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'Es obligatorio'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    invoiceId: {
      name: 'invoiceId',
      label: 'Use this invoiceId'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Nombre de Tarjeta*',
      requiredErrorMsg: 'Es obligatorio'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Numero de Tarjeta*',
      requiredErrorMsg: 'Es obligatorio',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Valido Hasta*',
      requiredErrorMsg: 'Es obligatorio',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'Es obligatorio',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
