let form = document.querySelector("#contact-form");
      form.addEventListener("submit", formSubmit);{
        e.preventDefault();
        let firstName = document.querySelector("firstname").value;
        let lastName = document.querySelector("lastname").value;
        let phone = document.querySelector("phone").value;
        let email = document.querySelector("email").value;
        let address= document.querySelector("address").value;
        let city = document.querySelector("city").value;
        let postcode = document.querySelector("postcode").value;
        
        document.querySelector("contact-form").reset();

        sendEmail(firstName,lastname,phone,email,address,city,postcode);
      }

      function sendEmail(firstName,lastname,phone,email,address,city,postcode)
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "dilarabaki54@gmail.com ",
          Password : "2A9DED794B7CF7BDDF28378C101599455AE7",
          To : 'dilarabaki54@gmail.com',
          From : 'dilarabaki54@gmail.com',
          Body : `Adı: ${name} + <br/> Soyadı: ${lastname} <br/> Telefon Numarası: ${phone}
          <br/> Email Adresi: ${email} <br/> Adres: ${address} <br/> Şehir: ${city}
          <br/> Posta Kodu: ${postcode}`,
          }).then((success) => {
            alert("Form Başarıyla Gönderildi.");
            console.log("BAŞARILI");
          }).catch((error) => {
            console.log("HATALI");
            alert("error sending message");
            
        })

  