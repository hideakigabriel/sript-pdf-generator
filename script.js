function convertDataFormPDF(){
  const getDataBudgetForm = document.getElementById('#budgetFormData')
  const inputName = document.getElementById('inputName').value
  const inputBusinessName = document.getElementById('inputBusinessName').value
  const inputTel = document.getElementById('inputTel').value
  const inputEmail = document.getElementById('inputEmail').value

  const PDFwindowData = window.open('', '', 'width=800, height=600')

  PDFwindowData.document.write('<html> <head>')
  PDFwindowData.document.write('<title>PDF Creator</title></head>')
  PDFwindowData.document.write('<body>')
  PDFwindowData.document.write(`<p>Projeto: ${inputBusinessName}</p> <p>Nome: ${inputName}</p> <p>Telefone: ${inputTel}</p> <p>Email: ${inputEmail}</p>`)
  PDFwindowData.document.write('</body></html>')

  PDFwindowData.document.close()
  PDFwindowData.print()
}