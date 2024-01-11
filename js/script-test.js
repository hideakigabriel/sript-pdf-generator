function convertDataFormPDF() {
  const inputName = document.getElementById("inputName").value;
  const inputBusinessName = document.getElementById("inputBusinessName").value;
  const inputTel = document.getElementById("inputTel").value;
  const inputEmail = document.getElementById("inputEmail").value;

  const doc = new jsPDF();
  const img = new Image();

  const date = new Date();

  const actualDay = date.getDate();

  const actualMounth = date.getMonth() + 1;

  actualMounthToStrign = actualMounth.toString();

  actualDayToStrign = actualDay.toString();

  const dateCode = actualDayToStrign + actualMounth;

  console.log("dateCode é ", dateCode);

  const firstLetterBusinessName = inputBusinessName.slice("");

  console.log(firstLetterBusinessName);

  // First Page (Página de proposta)

  doc.setFontSize(8);

  doc.text("@hideaki.design.software", 150, 10);

  doc.setFontSize(12);
  doc.text("Proposta: " + actualMounth, 20, 40);
  doc.text("Projeto: Logotipo - " + inputBusinessName, 20, 45);

  doc.text("Preparado para", 20, 60);
  doc.text(inputName, 20, 65);
  doc.text("Fone: " + inputTel, 20, 70);
  doc.text("E-mail: " + inputEmail + " ", 20, 75);

  doc.text("Criado por", 20, 85);
  doc.text("Desenvolvedor: Gabriel Hideaki", 20, 90);
  doc.text("Hideaki Design e Software", 20, 95);
  doc.text("10 de Fevereiro de 2020", 20, 100);
  doc.text("++55 11 98617-1486", 20, 105);
  doc.text("hideaki.gabrieldesign@gmail.com", 20, 110);

  doc.setFontType("bold");
  doc.text("Descrição do Serviço", 20, 120);

  doc.setFontType("normal");
  doc.text(
    "Geração de logotipos contendo fontes, cores e acabamentos.",
    20,
    130
  );

  doc.text("Entrega Preliminares", 20, 140);

  doc.text(
    "Durante o processo de produção, o cliente receberá imagens preliminares, para ",
    20,
    150
  );
  doc.text(
    "acompanhamento do trabalho e conferência de montagem, escolhas de fontes,",
    20,
    155
  );
  doc.text("cores, texturas, etc.", 20, 160);

  doc.setFontType("bold");
  doc.text("Forma de Entrega", 20, 170);

  doc.setFontType("normal");
  doc.text(
    ". Via internet: E-mail. Ao contratar o serviço, o cliente poderá acompanhar todas",
    20,
    180
  );
  doc.text(
    ". Via internet: E-mail. Ao contratar o serviço, o cliente poderá acompanhar todas",
    20,
    185
  );
  doc.text(
    "As etapas de elaboração e fazer o download das perspectivas.",
    20,
    190
  );
  doc.text(
    ". As perspectivas são entregues em formato JPG ou PNG e PDF em alta resolução.",
    20,
    195
  );
  doc.text("Havendo necessidade de outras resoluções, consulte-nos.", 20, 200);

  doc.setFontType("bold");
  doc.text("Prazos", 20, 210);

  doc.setFontType("normal");
  doc.text(
    "O trabalho terá início logo após fechamento do contrato, entrega de todo material para",
    20,
    220
  );
  doc.text(
    "execução, dada a data e hora do início do projeto e pagamento da primeira parcela.",
    20,
    225
  );
  doc.text(
    "Havendo ausência de material o prazo de entrega será alterado. Para a presente",
    20,
    230
  );
  doc.text(
    "proposta estipulamos um prazo máximo de 28 dias úteis para a entrega preliminar das",
    20,
    235
  );
  doc.text(
    "perspectivas – contados a partir da entrega do material e pagamento",
    20,
    240
  );

  // Second Page (Página de Valores)

  doc.addPage("a4");

  doc.setFontSize(8);
  doc.text("@hideaki.design.software", 150, 10);

  doc.setFontType("bold");
  doc.setFontSize(12);
  doc.text("Valores", 20, 40);

  doc.setFontType("normal");

  const HTMLelement = $(".html_to_pdf").html();

  doc.fromHTML(HTMLelement, 20, 45, {});

  doc.setFontType("bold");
  doc.setFontSize(12);
  doc.text("Formas de Pagamento", 20, 205);

  doc.setFontType("normal");
  doc.setFontSize(10);
  doc.text("- Pix (desconto de 10% à vista via PIX)", 20, 215);
  doc.text("- TED", 20, 220);
  doc.text(
    "- Cartão de crédito/débito (Parcelamos em até 10 vezes sem juros)",
    20,
    225
  );
  doc.text(
    "- Dependendo da forma de pagamento escolhida, haverá taxas inclusas.",
    20,
    235
  );

  // Third Page (Página de Termos e Condições)

  doc.addPage("a4");

  doc.setFontSize(8);
  doc.text("@hideaki.design.software", 150, 10);

  doc.setFontType("bold");
  doc.setFontSize(12);
  doc.text("Termos e Condições", 20, 40);

  doc.setFontType("normal");
  doc.text(
    "1. O orçamento é válido para as informações presentes no momento da contratação,",
    20,
    50
  );
  doc.text(
    "Informações adicionais são cobradas à parte e implicam em alteração de cronograma.",
    20,
    55
  );
  doc.text(
    "2. Após o fechamento dos arquivos, as solicitações de modificação ou alteração são",
    20,
    65
  );
  doc.text("cobradas à parte e implicam em alteração do cronograma.", 20, 70);
  doc.text(
    "3. Nas entregas intermediárias, as perspectivas são entregues em formato JPG com",
    20,
    80
  );
  doc.text("1080x1080 pixels e 72dpides resolução.", 20, 85);
  doc.text(
    "4. A Hideaki Design cede a (Nome Cliente) todos os direitos de uso das imagens e vídeos ",
    20,
    95
  );
  doc.text(
    "contratados para uso promocional do empreendimento desde que estejam quitados os",
    20,
    100
  );
  doc.text(
    "débitos do referido trabalho e resguardado o direito autoral de elaboração.",
    20,
    105
  );
  doc.text(
    "5. É importante estar familiarizado com o trabalho desenvolvido na Hideaki Design antes do ",
    20,
    115
  );
  doc.text("fechamento do contrato. Acesse nosso portfólio em", 20, 120);
  doc.textWithLink("https://www.instagram.com/hideaki.design/ .", 20, 125, {
    url: "https://www.instagram.com/hideaki.design/",
  });
  doc.text(
    "6. Em caso de rescisão contratual, será reembolsado 50% (cinquenta por cento) do valor ",
    20,
    135
  );
  doc.text("total.", 20, 140);
  doc.text(
    "7. No caso de mora, pelo contratante, no pagamento da remuneração descrita no campo ",
    20,
    150
  );
  doc.text(
    "forma de pagamento, estará automaticamente suspenso a entrega dos serviços contratados,",
    20,
    155
  );
  doc.text(
    "bem como será acrescido ao valor equivalente à parcela inadimplente a multa por ",
    20,
    160
  );
  doc.text(
    "importunidade de 5% (cinco por cento) e juros moratórios de 5% (cinco por cento) ao mês.",
    20,
    165
  );
  doc.text(
    "8. O pagamento da primeira parcela ou valor integral implica em aceitação de todos os ",
    20,
    175
  );
  doc.text("termos presentes nessa proposta por parte do cliente.", 20, 180);
  doc.text(
    "9. O layout das peças gráficas é amostra virtual, após aprovação será produzido conforme",
    20,
    190
  );
  doc.text("o mesmo pela gráfica escolhida.", 20, 195);
  doc.text(
    "10. É de total responsabilidade do cliente, que faça as devidas correções de escritas e",
    20,
    205
  );
  doc.text("cores.", 20, 210);
  doc.text(
    "11. Não nos responsabilizamos por erros ortográficos não corrigidos nos arquivos aprovados ",
    20,
    220
  );
  doc.text("pelo cliente.", 20, 225);

  // Fourth Page (Página de Validade de Proposta)

  doc.addPage("a4");

  doc.setFontSize(8);
  doc.text("@hideaki.design.software", 150, 10);

  doc.setFontType("bold");
  doc.setFontSize(12);
  doc.text("Validade da Proposta", 20, 40);

  doc.setFontType("normal");
  doc.text(
    "Os valores e prazos desta propsta têm validade de 15 dias (quinze) corridos.",
    20,
    50
  );

  doc.text("CPF: 433.930.418-27", 20, 260);
  doc.text("Fone: +55 (11) 98617-1486", 20, 265);
  doc.text("E-mail: hideaki.gabrieldesign@gmail.com", 20, 270);
  doc.text("Instagram: @hideaki.design", 20, 275);

  img.src = "assets/logo-signature.png";
  doc.addImage(img, "png", 105, 240);

  doc.line(120, 270, 180, 270);

  doc.text("Gabriel Hideaki Souza Kumai", 120, 275);

  // Save Document

  if (
    inputName == "" ||
    inputTel == "" ||
    inputBusinessName == "" ||
    inputTel == ""
  ) {
    console.log("Esse campo não pode estar vazio");
    alert(
      "❌ Você deixou um dos campos vazios! Certifique-se de preencher todo o formulário."
    );
    return false;
  } else {
    doc.autoPrint({ variant: "non-conform" });
    doc.output("dataurlnewwindow");
    doc.save(
      `Modelo de Prestação de Serviços ${inputBusinessName} - Hideaki Design e Software.pdf`
    );

    console.log("Sucesso!");
  }
}
