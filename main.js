function checkIt() {
    if (document.forms.mailer.Name.value !== "") { 
        
    } else {
        alert("\nОбласть \"Ім'я\" у формі. \n\Будь ласка, введіть своє ім'я."); 
        document.forms.mailer.Name.focus(); 
        return false;
    }
    if (document.forms.mailer.Subject.value !== "") { 
        
    } else {
        alert("\nОбласть \"Тема\" в формі. \n\Будь ласка, введіть, введите те-му."); 
        document.forms.mailer.Subject.focus();
        return false;
    }
    if (document.forms.mailer.Message.value !== "") {
    
        return true; 
    } else {
        alert("\nОбласть \"Повідомлення\" в формі. \n\nБудь ласка, напишіть повідомлення."); 
        document.forms.mailer.Message.focus();
        return false;
    } 
}
function msg() { 
    var mailtoandSubject = '?Subject=' + encodeURIComponent(document.forms.mailer.Subject.value) + '&Body=' + encodeURIComponent(document.forms.mailer.Message.value);
    document.mailer.action = 'mailto:astra1990@meta.ua' + mailtoandSubject;
}
