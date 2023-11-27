function convertDataFormPDF(){
  const inputName = document.getElementById('inputName').value
  const inputBusinessName = document.getElementById('inputBusinessName').value
  const inputTel = document.getElementById('inputTel').value
  const inputEmail = document.getElementById('inputEmail').value

  // const randomIdNumber = Math.floor(Math.random() * 100) 

  const doc = new jsPDF()

  // First Page

  doc.setFontSize(8)
  doc.text("@hideaki.design.software", 150, 10)

  doc.setFontSize(12)
  doc.text("Proposta: ", 20, 40)
  doc.text("Projeto: Logotipo - " + inputBusinessName, 20, 45)

  doc.text("Preparado para", 20, 60)
  doc.text(inputName , 20, 65)
  doc.text("Fone: " + inputTel , 20, 70)
  doc.text("E-mail: " + inputEmail , 20, 75)

  doc.text("Criado por", 20, 85)
  doc.text("Desenvolvedor: Gabriel Hideaki" , 20, 90)
  doc.text("Hideaki Design e Software" , 20, 95)
  doc.text("10 de Fevereiro de 2020", 20, 100)
  doc.text("++55 11 98617-1486", 20, 105)
  doc.text("hideaki.gabrieldesign@gmail.com", 20, 110)

  
  doc.text("Descrição do Serviço", 20, 120)

  doc.text("Geração de logotipos contendo fontes, cores e acabamentos.", 20, 130)

  
  doc.text("Entrega Preliminares", 20, 140)

  doc.text("Durante o processo de produção, o cliente receberá imagens preliminares, para ", 20, 150)
  doc.text("acompanhamento do trabalho e conferência de montagem, escolhas de fontes,", 20, 155)
  doc.text("cores, texturas, etc.", 20, 160)

  
  doc.text("Forma de Entrega", 20, 170)

  doc.text(". Via internet: E-mail. Ao contratar o serviço, o cliente poderá acompanhar todas", 20, 180)
  doc.text(". Via internet: E-mail. Ao contratar o serviço, o cliente poderá acompanhar todas", 20, 185)
  doc.text("As etapas de elaboração e fazer o download das perspectivas.", 20, 190)
  doc.text(". As perspectivas são entregues em formato JPG ou PNG e PDF em alta resolução.", 20, 195)
  doc.text("Havendo necessidade de outras resoluções, consulte-nos.", 20, 200)

  doc.text("Prazos", 20, 210)

  doc.text("O trabalho terá início logo após fechamento do contrato, entrega de todo material para", 20, 220)
  doc.text("execução, dada a data e hora do início do projeto e pagamento da primeira parcela.", 20, 225)
  doc.text("Havendo ausência de material o prazo de entrega será alterado. Para a presente", 20, 230)
  doc.text("proposta estipulamos um prazo máximo de 28 dias úteis para a entrega preliminar das", 20, 235)
  doc.text("perspectivas – contados a partir da entrega do material e pagamento", 20, 240)

  // Second Page

  doc.addPage("a4")

  doc.setFontSize(8)
  doc.text("@hideaki.design.software", 150, 10)

  doc.setFontSize(12)
  doc.text("Valores", 20, 40)

  // Third Page

  doc.addPage("a4")

  doc.setFontSize(8)
  doc.text("@hideaki.design.software", 150, 10)

  doc.setFontSize(12)
  doc.text("Termos e Condições", 20, 40)

  doc.text("1. O orçamento é válido para as informações presentes no momento da contratação,", 20, 50)
  doc.text("Informações adicionais são cobradas à parte e implicam em alteração de cronograma.", 20, 55)

  // Save Document

  doc.autoPrint({variant: 'non-conform'})
  doc.output('dataurlnewwindow')
  doc.save(`Modelo de Prestação de Serviços ${inputBusinessName} - Hideaki Design.pdf`)

}