document.addEventListener('DOMContentLoaded', function() {
    const languageTrigger = document.querySelector('.language-trigger');
    const languageOptions = document.querySelectorAll('.language-option');
    const toolbarButtons = document.querySelectorAll('.toolbar-btn');
    
    // Словарь переводов
    const translations = {
        ru: {
            home: 'Главная',
            create: 'Создать',
            upload: 'Загрузить',
            save: 'Сохранить',
            welcome: 'Добро пожаловать в GodotLingo',
            description: 'Современная платформа для разработки и управления проектами на Godot Engine. Создавайте, делитесь и развивайтесь вместе с сообществом.',
            footer: '© 2025 GodotLingo. Все права защищены.'
        },
        en: {
            home: 'Home',
            create: 'Create',
            upload: 'Upload',
            save: 'Save',
            welcome: 'Welcome to GodotLingo',
            description: 'Modern platform for Godot Engine project development and management. Create, share and grow together with the community.',
            footer: '© 2025 GodotLingo. All rights reserved.'
        },
        es: {
            home: 'Inicio',
            create: 'Crear',
            upload: 'Subir',
            save: 'Guardar',
            welcome: 'Bienvenido a GodotLingo',
            description: 'Plataforma moderna para el desarrollo y gestión de proyectos en Godot Engine. Crea, comparte y crece junto con la comunidad.',
            footer: '© 2025 GodotLingo. Todos los derechos reservados.'
        },
        zh: {
            home: '首页',
            create: '创建',
            upload: '上传',
            save: '保存',
            welcome: '欢迎来到 GodotLingo',
            description: '现代化的 Godot Engine 项目开发和管理平台。与社区一起创造、分享和成长。',
            footer: '© 2025 GodotLingo。保留所有权利。'
        }
    };
    
    // Переключение языка
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            
            // Обновить активный класс
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Обновить текст триггера
            languageTrigger.textContent = this.textContent;
            
            // Перевести интерфейс
            translateInterface(selectedLang);
        });
    });
    
    // Функция перевода интерфейса
    function translateInterface(lang) {
        const t = translations[lang];
        
        // Перевод кнопок тулбара
        if (toolbarButtons.length >= 4) {
            toolbarButtons[0].textContent = t.home;
            toolbarButtons[1].textContent = t.create;
            toolbarButtons[2].textContent = t.upload;
            toolbarButtons[3].textContent = t.save;
        }
        
        // Перевод контента
        const welcomeHeader = document.querySelector('.content-section h2');
        const descriptionParagraph = document.querySelector('.content-section p');
        const footerText = document.querySelector('footer p');
        
        if (welcomeHeader) welcomeHeader.textContent = t.welcome;
        if (descriptionParagraph) descriptionParagraph.textContent = t.description;
        if (footerText) footerText.textContent = t.footer;
        
        // Обновить атрибут lang у html
        document.documentElement.lang = lang;
    }
});