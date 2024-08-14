function getValue() {
    let Status = document.getElementById('Choose').value
    return Status
}

function checkRole(){
    let Gmail = document.getElementById('Gmail')
    let Password = document.getElementById('Password')
    let TableViewer = document.getElementById('TableViewer')
    let Table = document.getElementById('Table')
    let SignUp = document.getElementById('SignUp')


    if (Gmail.value == '' || Password.value == ''){
        alert('Please Fill Out All The Choices')
    } else if (getValue() == 'Moderator') {
        alert('Sign Up complete')
        SignUp.style.display = 'none'
        Table.style.display = 'flex'
    } else if (getValue() == 'Viewer') {
        Table.contentEditable = 'false'
        SignUp.style.display = 'none'
        Table.style.display = 'flex'
    }
}




