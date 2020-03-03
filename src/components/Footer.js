import React from "react"

const FootDescript = () => {
  return (
    <footer className="footclass">
      <table>
        <tr>
          <th>Siguenos</th>
          <th>Contacto</th>
          <th>Colaboradores</th>
        </tr>
        <tr>
          <td>
            <img className="fpktlogo" src="/FPKT.png" alt="Fpkt_Logo" />
            <tr className="social_iconos">
              <a href="www.facebook.com">
                <img src="/Face.png" alt="Facebook" />
              </a>
              <img src="/insta.png" alt="Instagram" />
              <img src="/twitter.png" alt="Twitter" />
            </tr>
          </td>

          <td className="iconos">
            <img src="/ubi.png" alt="location" />
            C/ Cardenal Tedeschini 3
            <img src="/mail.png" alt="mail" />
            info@farpotshket.com
            <img src="/phone.png" alt="phone_contact" />
            935512312
          </td>

          <td>
            <img src="/download.png" alt="kuail_logo" />
          </td>
        </tr>
      </table>
    </footer>
  )
}

export default FootDescript
