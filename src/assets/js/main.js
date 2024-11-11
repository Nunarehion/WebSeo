const dropdownMenu = {
    toggleButtons: document.querySelectorAll('.btn.dropdown__toggle'),
  
    init() {
      this.toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation()
          const dropdown = button.parentNode;
          const menuOverlay = dropdown.querySelector('.dropdown__menu');
          menuOverlay.classList.toggle('hidden');
          
        });
      });
    }
  };
  
  dropdownMenu.init();
  
  const sidebarToggle = {
    sidebar: document.querySelector(".sidebar"),
    btnBurger: document.querySelector(".btn.icon--burger"),
    backButton: document.querySelector(".sidebar .btn.icon--arrow-back"),
  
    init() {
      [this.btnBurger, this.backButton].forEach((button) => {
        button.addEventListener("click", () => {
          this.sidebar.classList.toggle("collapsed");
          this.btnBurger.classList.toggle("hidden");
        });
      });
    }
  };
  
  sidebarToggle.init();
  
  const modalCreateProject = {
    self: document.querySelector(".modal"),
    openButton: document.querySelector(".btn.btn_create-project"),
    closeButton: document.querySelector(".btn.modal__close"),
  
    open() {
      this.self.classList.remove("hidden");
    },
  
    close() {
      this.self.classList.add("hidden");
    },
  
    init() {
      this.openButton.addEventListener("click", () => this.open());
      this.closeButton.addEventListener("click", () => this.close());
    }
  };
  
  modalCreateProject.init();
  