    var form = document.getElementById('form'),
     user = form.userName,
     email = form.email,
     gender = form.gender,
     terms = form.terms,
     error = document.getElementById('error');

        function validName(event){
          if (user.value == "" || user.value == null) {
            console.log('Name is missing');
            error.style.display = 'block';
            error.innerHTML += '<li>Name is missing</li>';
            event.preventDefault();
          }else{
            error.style.display = 'none';
          }
        }

        function validEmail(event){
          if (email.value == "" || email.value == null) {
            console.log('Email is missing');
            error.style.display = 'block';
            error.innerHTML += '<li>Email is missing</li>';
            event.preventDefault();
          }else{
            error.style.display = 'none';
          }
        }

        function validGender(event){
          if (gender.value == '' || gender.value == null) {
            console.log('A gender must be selected');
            error.style.display = 'block';
            error.innerHTML += '<li>A gender must be selected</li>';
            event.preventDefault();
          }else{
            error.style.display="none";
          }
        }

        function validTerms(event){
          if (terms.checked == false) {
            console.log('Terms must be accepted');
            error.style.display = 'block';
            error.innerHTML += '<li>Terms must be accepted</li>';
            event.preventDefault();
          }else{
              error.style.display="none";
            }
          }

        function validForm(event){
          error.innerHTML = "";
          validName(event);
          validEmail(event);
          validGender(event);
          validTerms(event);
        }

        form.addEventListener('submit', validForm);
