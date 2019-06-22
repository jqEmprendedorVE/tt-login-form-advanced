import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1>Contacto</h1>
          <address>
            <strong>Julio Quintana</strong><br/>
            <a target="_blank" href="https://www.linkedin.com/in/jqemprendedorve/" rel="noopener noreferrer">Perfíl en Linkedin</a><br/>
            Ciudad de Buenos Aires, C.A.B.A.<br/>
            <abbr title="Phone">P:</abbr> +54 9 (11) 6685-0894
          </address>
        </div>
      </main>
    )
  }
}
export default Contact