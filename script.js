     // Al cargar la página, verificamos si ya existe un usuario logueado en localStorage
    document.addEventListener("DOMContentLoaded", function() {
      var currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        var loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
          loginBtn.style.display = "none";
        }
        var userInfoSpan = document.getElementById("user-info");
        if (!userInfoSpan) {
          userInfoSpan = document.createElement("span");
          userInfoSpan.id = "user-info";
          userInfoSpan.style.position = "absolute";
          userInfoSpan.style.right = "20px";
          userInfoSpan.style.top = "20px";
          userInfoSpan.style.backgroundColor = "#f39c12";
          userInfoSpan.style.color = "#121212";
          userInfoSpan.style.padding = "10px 20px";
          userInfoSpan.style.borderRadius = "3px";
          userInfoSpan.style.fontSize = "16px";
          userInfoSpan.style.cursor = "pointer";
          document.querySelector("header").appendChild(userInfoSpan);
        }
        userInfoSpan.textContent = currentUser;
        // Al hacer click en el nombre de usuario, alterna la visibilidad de Ajustes y Cerrar Sesión
        userInfoSpan.addEventListener("click", function(){
          var ajustesBtn = document.getElementById("ajustes-btn");
          var logoutBtn = document.getElementById("logout-btn");
          if (ajustesBtn.style.display === "none") {
            ajustesBtn.style.display = "block";
            logoutBtn.style.display = "block";
          } else {
            ajustesBtn.style.display = "none";
            logoutBtn.style.display = "none";
          }
        });
        // Crear el botón de Ajustes si no existe, oculto por defecto
        var ajustesBtn = document.getElementById('ajustes-btn');
        if (!ajustesBtn) {
          ajustesBtn = document.createElement("button");
          ajustesBtn.id = "ajustes-btn";
          ajustesBtn.className = "ajustes-btn";
          ajustesBtn.textContent = "Ajustes";
          ajustesBtn.style.display = "none";
          document.querySelector("header").appendChild(ajustesBtn);
          ajustesBtn.addEventListener("click", function() {
            showSection('ajustes');
          });
        }
        // NUEVO: Crear el botón de Cerrar Sesión si no existe, oculto por defecto y posicionado debajo de Ajustes
        var logoutBtn = document.getElementById("logout-btn");
        if (!logoutBtn) {
          logoutBtn = document.createElement("button");
          logoutBtn.id = "logout-btn";
          logoutBtn.className = "logout-btn";
          logoutBtn.textContent = "Cerrar Sesión";
          logoutBtn.style.display = "none";
          document.querySelector("header").appendChild(logoutBtn);
          logoutBtn.addEventListener("click", function(){
            localStorage.removeItem("currentUser");
            var userInfo = document.getElementById("user-info");
            if(userInfo) {
              userInfo.remove();
            }
            ajustesBtn.style.display = "none";
            logoutBtn.style.display = "none";
            var loginBtn = document.querySelector('.login-btn');
            if (loginBtn) {
              loginBtn.style.display = "block";
            }
          });
        }
      }
    });
    
    // Función para mostrar secciones
    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }
    
    // Objeto con datos de capítulos para cada manga (por título)
    var chapterData = {
      "Superhéroe De Tipo Crecimiento": {
        1: ["imagenes/ruta-imagen (1).jpg", "imagenes/ruta-imagen (2).jpg", "imagenes/ruta-imagen (3).jpg", "imagenes/ruta-imagen (4).jpg", "imagenes/ruta-imagen (5).jpg", "imagenes/ruta-imagen (6).jpg", "imagenes/ruta-imagen (7).jpg", "imagenes/ruta-imagen (8).jpg", "imagenes/ruta-imagen (9).jpg", "imagenes/ruta-imagen (10).jpg", "imagenes/ruta-imagen (11).jpg", "imagenes/ruta-imagen (12).jpg", "imagenes/ruta-imagen (13).jpg", "imagenes/ruta-imagen (14).jpg", "imagenes/ruta-imagen (15).jpg", "imagenes/ruta-imagen (16).jpg", "imagenes/ruta-imagen (17).jpg", "imagenes/ruta-imagen (18).jpg", "imagenes/ruta-imagen (19).jpg", "imagenes/ruta-imagen (20).jpg", "imagenes/ruta-imagen (21).jpg", "imagenes/ruta-imagen (22).jpg", "imagenes/ruta-imagen (23).jpg"]
      },
      "Decreto Imperial: Hacer Trampa A Voluntad": {
        1: ["imagenes/ruta-imagen (24).jpg", "imagenes/ruta-imagen (25).jpg", "imagenes/ruta-imagen (26).jpg", "imagenes/ruta-imagen (27).jpg", "imagenes/ruta-imagen (28).jpg", "imagenes/ruta-imagen (29).jpg", "imagenes/ruta-imagen (30).jpg", "imagenes/ruta-imagen (31).jpg", "imagenes/ruta-imagen (32).jpg", "imagenes/ruta-imagen (33).jpg", "imagenes/ruta-imagen (34).jpg", "imagenes/ruta-imagen (35).jpg", "imagenes/ruta-imagen (36).jpg", "imagenes/ruta-imagen (37).jpg", "imagenes/ruta-imagen (38).jpg", "imagenes/ruta-imagen (39).jpg", "imagenes/ruta-imagen (40).jpg", "imagenes/ruta-imagen (41).jpg", "imagenes/ruta-imagen (42).jpg", "imagenes/ruta-imagen (43).jpg", "imagenes/ruta-imagen (44).jpg", "imagenes/ruta-imagen (45).jpg"],
        2: ["imagenes/ruta-imagen (46).jpg", "imagenes/ruta-imagen (47).jpg", "imagenes/ruta-imagen (48).jpg", "imagenes/ruta-imagen (49).jpg", "imagenes/ruta-imagen (50).jpg", "imagenes/ruta-imagen (51).jpg", "imagenes/ruta-imagen (52).jpg", "imagenes/ruta-imagen (53).jpg", "imagenes/ruta-imagen (54).jpg", "imagenes/ruta-imagen (55).jpg", "imagenes/ruta-imagen (56).jpg", "imagenes/ruta-imagen (57).jpg", "imagenes/ruta-imagen (58).jpg", "imagenes/ruta-imagen (59).jpg", "imagenes/ruta-imagen (60).jpg", "imagenes/ruta-imagen (61).jpg", "imagenes/ruta-imagen (62).jpg", "imagenes/ruta-imagen (63).jpg", "imagenes/ruta-imagen (64).jpg"]
      },
      "Poder A Través De La Muerte": {
        1: ["imagenes/ruta-imagen (65).jpg", "imagenes/ruta-imagen (66).jpg", "imagenes/ruta-imagen (67).jpg", "imagenes/ruta-imagen (68).jpg", "imagenes/ruta-imagen (69).jpg", "imagenes/ruta-imagen (70).jpg", "imagenes/ruta-imagen (71).jpg", "imagenes/ruta-imagen (72).jpg", "imagenes/ruta-imagen (73).jpg", "imagenes/ruta-imagen (74).jpg", "imagenes/ruta-imagen (75).jpg", "imagenes/ruta-imagen (76).jpg", "imagenes/ruta-imagen (77).jpg", "imagenes/ruta-imagen (78).jpg", "imagenes/ruta-imagen (79).jpg", "imagenes/ruta-imagen (80).jpg", "imagenes/ruta-imagen (81).jpg", "imagenes/ruta-imagen (82).jpg", "imagenes/ruta-imagen (83).jpg"],
        2: ["imagenes/ruta-imagen (84).jpg", "imagenes/ruta-imagen (85).jpg", "imagenes/ruta-imagen (86).jpg", "imagenes/ruta-imagen (89).jpg", "imagenes/ruta-imagen (90).jpg", "imagenes/ruta-imagen (91).jpg", "imagenes/ruta-imagen (92).jpg", "imagenes/ruta-imagen (93).jpg", "imagenes/ruta-imagen (94).jpg", "imagenes/ruta-imagen (95).jpg", "imagenes/ruta-imagen (96).jpg", "imagenes/ruta-imagen (97).jpg", "imagenes/ruta-imagen (98).jpg", "imagenes/ruta-imagen (99).jpg", "imagenes/ruta-imagen (100).jpg", "imagenes/ruta-imagen (101).jpg"],
        3: ["imagenes/ruta-imagen (102).jpg", "imagenes/ruta-imagen (103).jpg", "imagenes/ruta-imagen (104).jpg", "imagenes/ruta-imagen (105).jpg", "imagenes/ruta-imagen (106).jpg", "imagenes/ruta-imagen (107).jpg", "imagenes/ruta-imagen (108).jpg", "imagenes/ruta-imagen (109).jpg", "imagenes/ruta-imagen (110).jpg", "imagenes/ruta-imagen (111).jpg", "imagenes/ruta-imagen (112).jpg", "imagenes/ruta-imagen (113).jpg", "imagenes/ruta-imagen (114).jpg", "imagenes/ruta-imagen (115).jpg"]
      },
      "La Vida Escolar Del Señor De La Tierra": {
        1: ["imagenes/ruta-imagen (116).jpg", "imagenes/ruta-imagen (117).jpg", "imagenes/ruta-imagen (118).jpg", "imagenes/ruta-imagen (119).jpg", "imagenes/ruta-imagen (120).jpg", "imagenes/ruta-imagen (121).jpg", "imagenes/ruta-imagen (122).jpg", "imagenes/ruta-imagen (123).jpg", "imagenes/ruta-imagen (124).jpg", "imagenes/ruta-imagen (125).jpg", "imagenes/ruta-imagen (126).jpg", "imagenes/ruta-imagen (127).jpg", "imagenes/ruta-imagen (128).jpg", "imagenes/ruta-imagen (129).jpg", "imagenes/ruta-imagen (130).jpg"],
        2: ["imagenes/ruta-imagen (131).jpg", "imagenes/ruta-imagen (132).jpg", "imagenes/ruta-imagen (133).jpg", "imagenes/ruta-imagen (134).jpg", "imagenes/ruta-imagen (135).jpg", "imagenes/ruta-imagen (136).jpg", "imagenes/ruta-imagen (137).jpg", "imagenes/ruta-imagen (138).jpg", "imagenes/ruta-imagen (139).jpg", "imagenes/ruta-imagen (140).jpg", "imagenes/ruta-imagen (141).jpg", "imagenes/ruta-imagen (142).jpg", "imagenes/ruta-imagen (143).jpg", "imagenes/ruta-imagen (144).jpg"],
        3: ["imagenes/ruta-imagen (145).jpg", "imagenes/ruta-imagen (146).jpg", "imagenes/ruta-imagen (147).jpg", "imagenes/ruta-imagen (148).jpg", "imagenes/ruta-imagen (149).jpg", "imagenes/ruta-imagen (150).jpg", "imagenes/ruta-imagen (151).jpg", "imagenes/ruta-imagen (152).jpg", "imagenes/ruta-imagen (153).jpg", "imagenes/ruta-imagen (154).jpg", "imagenes/ruta-imagen (155).jpg", "imagenes/ruta-imagen (156).jpg", "imagenes/ruta-imagen (157).jpg", "imagenes/ruta-imagen (158).jpg", "imagenes/ruta-imagen (159).jpg"],
        4: ["imagenes/ruta-imagen (160).jpg", "imagenes/ruta-imagen (161).jpg", "imagenes/ruta-imagen (162).jpg", "imagenes/ruta-imagen (163).jpg", "imagenes/ruta-imagen (164).jpg", "imagenes/ruta-imagen (165).jpg", "imagenes/ruta-imagen (166).jpg", "imagenes/ruta-imagen (167).jpg", "imagenes/ruta-imagen (168).jpg", "imagenes/ruta-imagen (169).jpg", "imagenes/ruta-imagen (170).jpg"],
        5: ["imagenes/ruta-imagen (171).jpg", "imagenes/ruta-imagen (172).jpg", "imagenes/ruta-imagen (173).jpg", "imagenes/ruta-imagen (174).jpg", "imagenes/ruta-imagen (175).jpg", "imagenes/ruta-imagen (176).jpg", "imagenes/ruta-imagen (177).jpg", "imagenes/ruta-imagen (178).jpg", "imagenes/ruta-imagen (179).jpg", "imagenes/ruta-imagen (180).jpg", "imagenes/ruta-imagen (181).jpg", "imagenes/ruta-imagen (182).jpg"],
        6: ["imagenes/ruta-imagen (183).jpg", "imagenes/ruta-imagen (184).jpg", "imagenes/ruta-imagen (185).jpg", "imagenes/ruta-imagen (186).jpg", "imagenes/ruta-imagen (187).jpg", "imagenes/ruta-imagen (188).jpg", "imagenes/ruta-imagen (189).jpg", "imagenes/ruta-imagen (190).jpg", "imagenes/ruta-imagen (191).jpg", "imagenes/ruta-imagen (192).jpg", "imagenes/ruta-imagen (193).jpg", "imagenes/ruta-imagen (194).jpg"],
        7: ["imagenes/ruta-imagen (195).jpg", "imagenes/ruta-imagen (196).jpg", "imagenes/ruta-imagen (197).jpg", "imagenes/ruta-imagen (198).jpg", "imagenes/ruta-imagen (199).jpg", "imagenes/ruta-imagen (200).jpg", "imagenes/ruta-imagen (201).jpg", "imagenes/ruta-imagen (202).jpg", "imagenes/ruta-imagen (203).jpg", "imagenes/ruta-imagen (204).jpg", "imagenes/ruta-imagen (205).jpg"],
        8: ["imagenes/ruta-imagen (206).jpg", "imagenes/ruta-imagen (207).jpg", "imagenes/ruta-imagen (208).jpg", "imagenes/ruta-imagen (209).jpg", "imagenes/ruta-imagen (210).jpg", "imagenes/ruta-imagen (211).jpg", "imagenes/ruta-imagen (212).jpg", "imagenes/ruta-imagen (213).jpg", "imagenes/ruta-imagen (214).jpg", "imagenes/ruta-imagen (215).jpg", "imagenes/ruta-imagen (216).jpg"]
      }
    };
    
    var currentMangaTitle = "";
    
    // NUEVO: Función para copiar la tarjeta a Favoritos usando el botón de estrella
    function favoriteCard(btn) {
      var card = btn.closest('.card');
      var startReadingBtn = card.querySelector('.start-reading');
      var cardData = {
        id: startReadingBtn.dataset.id,
        title: startReadingBtn.dataset.title,
        image: startReadingBtn.dataset.image,
        categories: startReadingBtn.dataset.categories,
        description: startReadingBtn.dataset.description,
        chapterCount: startReadingBtn.dataset.chapterCount
      };
      addFavorite(cardData);
      showSection('favoritos');
      loadFavorites();
    }
    
    // Función para agregar un favorito (guarda la información en localStorage)
    function addFavorite(cardData) {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.find(fav => fav.title === cardData.title)) {
        favorites.push(cardData);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Agregado a Favoritos");
      } else {
        alert("Ya está en Favoritos");
      }
    }
    
    // Función para cargar la sección de Favoritos
    function loadFavorites() {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      var grid = document.getElementById("favorites-grid");
      grid.innerHTML = "";
      favorites.forEach(function(cardData) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${cardData.image}" alt="${cardData.title}">
          <div class="card-content">
            <div class="card-title">
              ${cardData.title}
              <button class="fav-btn" title="Eliminar de Favoritos" onclick="removeFavorite('${cardData.title}')">★</button>
            </div>
            <div class="card-chapter">Capítulo: ${cardData.chapterCount}</div>
            <p class="card-description">${cardData.description}</p>
            <div class="card-categories">
              ${cardData.categories.split(",").map(g => `<span>${g.trim()}</span>`).join('')}
            </div>
            <a href="#" class="btn start-reading" 
               data-id="${cardData.id}"
               data-title="${cardData.title}" 
               data-image="${cardData.image}" 
               data-categories="${cardData.categories}"
               data-description="${cardData.description}"
               data-chapter-count="${cardData.chapterCount}">
              Start Reading
            </a>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    
    // Agregar listener a los botones de Favoritos en tarjetas preexistentes
    document.querySelectorAll('.card .fav-btn').forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        favoriteCard(this);
      });
    });
    
    // Listener para botones "Start Reading" de las tarjetas
    document.querySelectorAll('.start-reading').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        currentMangaTitle = this.dataset.title;
        const image = this.dataset.image;
        const categories = this.dataset.categories;
        const description = this.dataset.description;
        const chaptersForManga = chapterData[currentMangaTitle];
        const chapterCount = chaptersForManga ? Object.keys(chaptersForManga).length : parseInt(this.dataset.chapterCount) || 1;
        
        document.getElementById('reading-title').textContent = currentMangaTitle;
        document.getElementById('reading-cover').src = image;
        document.getElementById('reading-genres').innerHTML = "<strong>Géneros:</strong> " + categories;
        document.getElementById('reading-description').textContent = description;
        
        const chapterList = document.getElementById('reading-chapters');
        let listHTML = '';
        for(let i = 1; i <= chapterCount; i++){
          listHTML += `<li><a href="#" class="chapter-link" data-chapter="${i}">Capítulo ${i}</a></li>`;
        }
        chapterList.innerHTML = listHTML;
        
        document.querySelectorAll('.chapter-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const chapter = this.dataset.chapter;
            loadChapter(chapter);
          });
        });
        
        // Cargar comentarios guardados para este manga
        loadComments();
        
        showSection('reading');
      });
    });
    
    // Actualizamos el botón "Leer Manga" en la sección Reading para que cargue el capítulo 1
    document.querySelectorAll('.manga-actions a.leer-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if(currentMangaTitle){
          loadChapter(1);
        } else {
          alert("No hay manga seleccionado");
        }
      });
    });
    
    function loadChapter(chapterNumber) {
      const images = chapterData[currentMangaTitle] && chapterData[currentMangaTitle][chapterNumber];
      const chapterTitleElem = document.getElementById('chapter-title');
      const chapterImagesElem = document.getElementById('chapter-images');
      if(images) {
        chapterTitleElem.textContent = "Capítulo " + chapterNumber + " de " + currentMangaTitle;
        let imgsHTML = "";
        images.forEach(src => {
          imgsHTML += `<img src="${src}" alt="Página del Capítulo ${chapterNumber}">`;
        });
        chapterImagesElem.innerHTML = imgsHTML;
      } else {
        chapterTitleElem.textContent = "Capítulo no encontrado";
        chapterImagesElem.innerHTML = "";
      }
      showSection('chapter');
    }
    
    document.getElementById('uploadForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let titulo = document.getElementById('titulo').value;
      let autor = document.getElementById('autor').value;
      let generos = document.getElementById('generos').value;
      let estado = document.getElementById('estado').value;
      let descripcion = document.getElementById('descripcion').value;
      let portadaInput = document.getElementById('portada');
      let file = portadaInput.files[0];
      
      if(file) {
        let reader = new FileReader();
        reader.onload = function(e) {
          let imageDataUrl = e.target.result;
          let card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${imageDataUrl}" alt="${titulo}">
            <div class="card-content">
              <div class="card-title">
                ${titulo}
                <button class="fav-btn" title="Agregar a Favoritos" onclick="favoriteCard(this)">★</button>
              </div>
              <div class="card-chapter">Capítulo: 1</div>
              <p class="card-description">${descripcion}</p>
              <div class="card-categories">
                ${generos.split(',').map(g => `<span>${g.trim()}</span>`).join('')}
              </div>
              <a href="#" class="btn start-reading" 
                 data-id="new"
                 data-title="${titulo}" 
                 data-image="${imageDataUrl}" 
                 data-categories="${generos}"
                 data-description="${descripcion}"
                 data-chapter-count="1">
                Start Reading
              </a>
            </div>
          `;
          document.querySelector('#inicio .grid').appendChild(card);
          card.querySelector('.fav-btn').addEventListener("click", function(e) {
            e.preventDefault();
            favoriteCard(this);
          });
          card.querySelector('.start-reading').addEventListener('click', function(e) {
            e.preventDefault();
            currentMangaTitle = this.dataset.title;
            const image = this.dataset.image;
            const categories = this.dataset.categories;
            const description = this.dataset.description;
            const chapterCount = parseInt(this.dataset.chapterCount) || 1;
            document.getElementById('reading-title').textContent = currentMangaTitle;
            document.getElementById('reading-cover').src = image;
            document.getElementById('reading-genres').innerHTML = "<strong>Géneros:</strong> " + categories;
            document.getElementById('reading-description').textContent = description;
            
            const chapterList = document.getElementById('reading-chapters');
            let listHTML = '';
            for(let i = 1; i <= chapterCount; i++){
              listHTML += `<li><a href="#" class="chapter-link" data-chapter="${i}">Capítulo ${i}</a></li>`;
            }
            chapterList.innerHTML = listHTML;
            document.querySelectorAll('.chapter-link').forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const chapter = this.dataset.chapter;
                loadChapter(chapter);
              });
            });
            loadComments();
            showSection('reading');
          });
          document.getElementById('uploadForm').reset();
          showSection('inicio');
        }
        reader.readAsDataURL(file);
      }
    });
    
    document.querySelectorAll('.chapter-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const chapter = this.dataset.chapter;
        loadChapter(chapter);
      });
    });
    
    // Lógica de Login/Registro
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
    
    function registerUser(username, password) {
      const users = JSON.parse(localStorage.getItem('users'));
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        alert("El usuario ya existe.");
        return;
      }
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Usuario registrado exitosamente.");
      document.getElementById('register-container').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
      console.log("Usuarios guardados:", JSON.stringify(users, null, 2));
    }
    
    function loginUser(username, password) {
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        document.getElementById('response').style.display = 'block';
        localStorage.setItem("currentUser", username);
        var loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
          loginBtn.style.display = 'none';
        }
        var userInfoSpan = document.getElementById('user-info');
        if (!userInfoSpan) {
          userInfoSpan = document.createElement('span');
          userInfoSpan.id = 'user-info';
          userInfoSpan.style.position = 'absolute';
          userInfoSpan.style.right = '20px';
          userInfoSpan.style.top = '20px';
          userInfoSpan.style.backgroundColor = '#f39c12';
          userInfoSpan.style.color = '#121212';
          userInfoSpan.style.padding = '10px 20px';
          userInfoSpan.style.borderRadius = '3px';
          userInfoSpan.style.fontSize = '16px';
          userInfoSpan.style.cursor = 'pointer';
          document.querySelector('header').appendChild(userInfoSpan);
        }
        userInfoSpan.textContent = username;
        console.log("Usuario logueado:", user);
        setTimeout(function() {
          showSection('inicio');
        }, 2000);
      } else {
        alert("Credenciales incorrectas.");
      }
    }
    
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      loginUser(username, password);
    });
    
    document.getElementById('register-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('new-username').value;
      const password = document.getElementById('new-password').value;
      registerUser(username, password);
    });
    
    document.getElementById('registerBtn').addEventListener('click', function() {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('register-container').style.display = 'block';
    });
    
    document.getElementById('loginBtn').addEventListener('click', function() {
      document.getElementById('register-container').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
    });
    
    // Función para cargar comentarios para el manga actual
    function loadComments() {
      var key = "comments_" + currentMangaTitle;
      var commentsArray = JSON.parse(localStorage.getItem(key)) || [];
      var container = document.getElementById('comments-container');
      container.innerHTML = "";
      commentsArray.forEach(function(comment) {
        var p = document.createElement('p');
        p.textContent = comment;
        container.appendChild(p);
      });
    }
    
    // Lógica para el área de comentarios en la sección "Reading"
    document.getElementById('submit-comment').addEventListener('click', function() {
      var userInfo = document.getElementById('user-info');
      if (!userInfo || userInfo.textContent.trim() === "") {
        alert("Debes iniciar sesión para comentar.");
        return;
      }
      var username = userInfo.textContent.trim();
      var commentText = document.getElementById('comment-text').value.trim();
      if (commentText === "") {
        alert("Por favor ingresa un comentario.");
        return;
      }
      var comment = username + ": " + commentText;
      var key = "comments_" + currentMangaTitle;
      var commentsArray = JSON.parse(localStorage.getItem(key)) || [];
      commentsArray.push(comment);
      localStorage.setItem(key, JSON.stringify(commentsArray));
      
      var commentElem = document.createElement('p');
      commentElem.textContent = comment;
      document.getElementById('comments-container').appendChild(commentElem);
      
      document.getElementById('comment-text').value = "";
    });
    
    // Lógica para la sección de Ajustes (cambio de contraseña)
    document.getElementById('ajustes-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var newPass = document.getElementById('new-password-ajustes').value.trim();
      var confirmNewPass = document.getElementById('confirm-new-password').value.trim();
      var currentPassInput = document.getElementById('current-password').value.trim();
      
      if(newPass.length < 4 || newPass.length > 8) {
        alert("La nueva contraseña debe tener entre 4 y 8 dígitos.");
        return;
      }
      if(newPass !== confirmNewPass) {
        alert("La nueva contraseña y su confirmación no coinciden.");
        return;
      }
      
      var currentUser = localStorage.getItem("currentUser");
      if(!currentUser) {
        alert("No hay usuario logueado.");
        return;
      }
      
      var users = JSON.parse(localStorage.getItem("users"));
      var userIndex = users.findIndex(user => user.username === currentUser);
      if(userIndex === -1) {
        alert("Usuario no encontrado.");
        return;
      }
      
      if(users[userIndex].password !== currentPassInput) {
        alert("La contraseña actual es incorrecta.");
        return;
      }
      
      users[userIndex].password = newPass;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Contraseña actualizada exitosamente.");
      
      document.getElementById('ajustes-form').reset();
      showSection('inicio');
    });
    
    // Actualizar el comportamiento del enlace de Favoritos en el nav para cargar la sección
    document.querySelector('nav a[href="#favoritos"]').addEventListener('click', function(e){
      e.preventDefault();
      showSection('favoritos');
      loadFavorites();
    });
    
    // NUEVO: Función para cargar la sección de Favoritos
    function loadFavorites() {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      var grid = document.getElementById("favorites-grid");
      grid.innerHTML = "";
      favorites.forEach(function(cardData) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${cardData.image}" alt="${cardData.title}">
          <div class="card-content">
            <div class="card-title">
              ${cardData.title}
              <button class="fav-btn" title="Eliminar de Favoritos" onclick="removeFavorite('${cardData.title}')">★</button>
            </div>
            <div class="card-chapter">Capítulo: ${cardData.chapterCount}</div>
            <p class="card-description">${cardData.description}</p>
            <div class="card-categories">
              ${cardData.categories.split(",").map(g => `<span>${g.trim()}</span>`).join('')}
            </div>
            <a href="#" class="btn start-reading" 
               data-id="${cardData.id}"
               data-title="${cardData.title}" 
               data-image="${cardData.image}" 
               data-categories="${cardData.categories}"
               data-description="${cardData.description}"
               data-chapter-count="${cardData.chapterCount}">
              Start Reading
            </a>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    
    // NUEVO: Función para eliminar un favorito
    function removeFavorite(title) {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites = favorites.filter(fav => fav.title !== title);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      loadFavorites();
    }
    
    // Agregar listener a los botones de Favoritos en tarjetas preexistentes
    document.querySelectorAll('.card .fav-btn').forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        favoriteCard(this);
      });
    });