window.Userform = React.createReactClass
  render: ->
    React.DOM.div
      className: 'col-md-12'
    React.DOM.input
      type: 'email'
      className: 'form-control'
      placeholder: 'Enter your email address'
      name: 'email'

    