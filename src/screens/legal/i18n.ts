import type { Locale } from '../../i18n/common'

export type LegalPageId = 'privacy' | 'cookies' | 'about' | 'contact'

type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

type LegalPageText = {
  kicker: string
  title: string
  intro: string
  updated?: string
  sections: LegalSection[]
}

type LegalUi = {
  pages: Record<LegalPageId, LegalPageText>
  contactAction: string
  manageConsentAction: string
  resourcesTitle: string
  googleDataLink: string
  adsSettingsLink: string
  analyticsOptOutLink: string
}

export const ui: Record<Locale, LegalUi> = {
  pt: {
    contactAction: 'Enviar email',
    manageConsentAction: 'Rever escolhas de cookies',
    resourcesTitle: 'Controlos e informação da Google',
    googleDataLink: 'Como a Google utiliza dados em sites parceiros',
    adsSettingsLink: 'Definições de publicidade da Google',
    analyticsOptOutLink: 'Extensão para desativar o Google Analytics',
    pages: {
      privacy: {
        kicker: 'TRANSPARÊNCIA',
        title: 'Política de Privacidade',
        intro: 'O Satzbau foi criado para ensinar alemão sem exigir uma conta. Esta página explica de forma clara que dados podem ser tratados e que escolhas tens.',
        updated: 'Última atualização: 18 de outubro de 2026',
        sections: [
          {
            title: 'Responsável e contacto',
            paragraphs: ['O responsável por este projeto é Bruno Rendeiro. Para questões de privacidade, correções ou pedidos relacionados com os teus dados, escreve para brunonrendeiro@gmail.com.'],
          },
          {
            title: 'O que o Satzbau guarda no teu dispositivo',
            paragraphs: ['A app não tem contas, perfis de utilizador, backend ou base de dados própria. Algumas preferências ficam apenas no armazenamento local do browser para a app funcionar como esperas.'],
            bullets: ['Idioma escolhido.', 'Tema claro ou escuro.', 'Escolha de consentimento para análise e publicidade.', 'Melhor pontuação do quiz.'],
          },
          {
            title: 'Google Analytics e Google AdSense',
            paragraphs: [
              'Só carregamos o Google Analytics e o Google AdSense depois de aceitares cookies de análise e publicidade. Estes serviços podem tratar dados como endereço IP, informações do dispositivo, páginas visitadas, interações, cookies, identificadores e tecnologias semelhantes.',
              'Fornecedores terceiros, incluindo a Google, usam cookies para apresentar e medir anúncios. A utilização de cookies de publicidade pela Google pode permitir anúncios baseados em visitas anteriores a este e a outros sites. Podes controlar a personalização nas definições de publicidade da Google.',
              'A conservação e o tratamento realizados pela Google seguem as configurações da conta e as políticas da própria Google. O Satzbau recebe sobretudo informação agregada e não tenta identificar visitantes individualmente.',
            ],
          },
          {
            title: 'Áudio das frases',
            paragraphs: ['O botão de áudio usa a funcionalidade de síntese de voz disponibilizada pelo teu browser ou sistema operativo. O Satzbau envia a frase para essa funcionalidade, mas não a guarda numa base de dados própria. O processamento concreto depende do browser, dispositivo e voz instalada.'],
          },
          {
            title: 'Quando nos envias um email',
            paragraphs: ['Se entrares em contacto, recebemos o endereço, o conteúdo da mensagem e quaisquer dados que decidas incluir. Usamos essa informação apenas para responder e acompanhar o pedido, conservando-a pelo tempo razoavelmente necessário.'],
          },
          {
            title: 'As tuas escolhas e direitos',
            paragraphs: ['Podes recusar ou rever cookies a qualquer momento através de “Gerir cookies” no rodapé. Também podes apagar o armazenamento local nas definições do browser. Para pedir acesso, correção ou eliminação de informação enviada por email, contacta-nos.'],
          },
          {
            title: 'Alterações a esta política',
            paragraphs: ['Esta política pode ser atualizada quando a app, os fornecedores ou os requisitos aplicáveis mudarem. A data no topo identifica a versão atual.'],
          },
        ],
      },
      cookies: {
        kicker: 'CONTROLO',
        title: 'Cookies e armazenamento local',
        intro: 'O Satzbau usa preferências locais para funcionar e só ativa serviços de análise e publicidade depois da tua escolha.',
        updated: 'Última atualização: 18 de outubro de 2026',
        sections: [
          {
            title: 'Preferências funcionais',
            paragraphs: ['Estas entradas ficam no teu browser até as apagares. Não são usadas para criar uma conta ou perfil pessoal.'],
            bullets: [
              'satzbau-locale — mantém o idioma PT, EN ou DE.',
              'satzbau-theme — mantém o tema claro ou escuro.',
              'satzbau-analytics-consent — regista se aceitaste ou recusaste análise e publicidade.',
              'satzbau-quiz-best — mantém a melhor pontuação do quiz neste dispositivo.',
            ],
          },
          {
            title: 'Serviços opcionais da Google',
            paragraphs: ['Depois de aceitares, o Google Analytics ajuda a medir utilização agregada e o Google AdSense permite apresentar e medir publicidade. Estes serviços podem criar ou ler cookies e outros identificadores de acordo com as políticas da Google. Se recusares, o código destes serviços não é carregado pelo Satzbau.'],
          },
          {
            title: 'Mudar de ideias',
            paragraphs: ['Usa o botão abaixo ou “Gerir cookies” no rodapé. Se retirares um consentimento já dado, a página é recarregada para deixar de carregar os serviços opcionais. Também podes apagar cookies e armazenamento local diretamente no browser.'],
          },
        ],
      },
      about: {
        kicker: 'O PROJETO',
        title: 'Sobre o Satzbau',
        intro: 'Uma ferramenta gratuita para aprender alemão de forma visual, prática e menos intimidante.',
        sections: [
          {
            title: 'Porque existe',
            paragraphs: ['O Satzbau foi criado por Bruno Rendeiro a partir da experiência real de aprender alemão enquanto vive na Suíça. A ideia é transformar regras abstratas em frases que podes construir, ouvir e usar no quotidiano.'],
          },
          {
            title: 'Para quem foi criado',
            paragraphs: ['É especialmente útil para falantes de português e inglês que estão no nível inicial e precisam de alemão para trabalho, transportes, compras, saúde, serviços públicos e vida diária na Suíça.'],
          },
          {
            title: 'Como é mantido',
            paragraphs: ['O software e os conteúdos são criados e revistos por Bruno Rendeiro com apoio de ferramentas de inteligência artificial no desenvolvimento. Os percursos principais são testados em telemóvel e computador. Correções e sugestões são bem-vindas.'],
          },
          {
            title: 'Modelo do projeto',
            paragraphs: ['A utilização é gratuita. A publicidade pode ajudar a pagar domínio, manutenção e evolução do projeto, sem bloquear as lições essenciais. O Satzbau é uma ferramenta complementar e não substitui um professor ou curso certificado.'],
          },
        ],
      },
      contact: {
        kicker: 'FALA CONNOSCO',
        title: 'Contacto',
        intro: 'Encontraste uma frase estranha, um erro ou tens uma ideia para melhorar o Satzbau? Escreve diretamente ao responsável pelo projeto.',
        sections: [
          {
            title: 'Bruno Rendeiro',
            paragraphs: ['Email: brunonrendeiro@gmail.com'],
          },
          {
            title: 'Podes contactar para',
            bullets: ['Correções de alemão ou traduções.', 'Problemas técnicos e acessibilidade.', 'Questões de privacidade e dados.', 'Parcerias ou publicidade relevante para quem aprende alemão.'],
          },
          {
            title: 'Ajuda-nos a responder melhor',
            paragraphs: ['Se reportares um problema, indica a página, o dispositivo e o que estavas a tentar fazer. Não envies palavras-passe, documentos pessoais ou outros dados sensíveis.'],
          },
        ],
      },
    },
  },
  en: {
    contactAction: 'Send email',
    manageConsentAction: 'Review cookie choices',
    resourcesTitle: 'Google information and controls',
    googleDataLink: 'How Google uses data on partner sites',
    adsSettingsLink: 'Google advertising settings',
    analyticsOptOutLink: 'Google Analytics opt-out extension',
    pages: {
      privacy: {
        kicker: 'TRANSPARENCY',
        title: 'Privacy Policy',
        intro: 'Satzbau was designed to teach German without requiring an account. This page clearly explains what data may be processed and what choices you have.',
        updated: 'Last updated: 18 October 2026',
        sections: [
          { title: 'Controller and contact', paragraphs: ['This project is operated by Bruno Rendeiro. For privacy questions, corrections or requests concerning your data, email brunonrendeiro@gmail.com.'] },
          { title: 'What Satzbau stores on your device', paragraphs: ['The app has no user accounts, profiles, backend or proprietary database. A few preferences remain only in your browser’s local storage so the app behaves as expected.'], bullets: ['Selected language.', 'Light or dark theme.', 'Consent choice for analytics and advertising.', 'Best quiz score.'] },
          { title: 'Google Analytics and Google AdSense', paragraphs: ['Google Analytics and Google AdSense are loaded only after you accept analytics and advertising cookies. These services may process information such as IP address, device details, visited pages, interactions, cookies, identifiers and similar technologies.', 'Third-party vendors, including Google, use cookies to serve and measure ads. Google’s use of advertising cookies may enable ads based on previous visits to this and other websites. You can control personalisation in Google’s advertising settings.', 'Data retention and processing by Google follow the account settings and Google’s own policies. Satzbau mainly receives aggregated information and does not attempt to identify individual visitors.'] },
          { title: 'Phrase audio', paragraphs: ['The audio button uses speech synthesis provided by your browser or operating system. Satzbau passes the phrase to that feature but does not store it in its own database. Processing depends on the browser, device and installed voice.'] },
          { title: 'When you email us', paragraphs: ['If you contact us, we receive your address, message and any information you choose to include. We use it only to reply and handle the request, retaining it for as long as reasonably necessary.'] },
          { title: 'Your choices and rights', paragraphs: ['You can refuse or review cookies at any time through “Manage cookies” in the footer. You can also clear local storage in your browser settings. To request access, correction or deletion of information sent by email, contact us.'] },
          { title: 'Changes to this policy', paragraphs: ['This policy may be updated when the app, providers or applicable requirements change. The date at the top identifies the current version.'] },
        ],
      },
      cookies: {
        kicker: 'CONTROL',
        title: 'Cookies and local storage',
        intro: 'Satzbau uses local preferences to work and activates analytics and advertising services only after your choice.',
        updated: 'Last updated: 18 October 2026',
        sections: [
          { title: 'Functional preferences', paragraphs: ['These entries remain in your browser until you delete them. They are not used to create an account or personal profile.'], bullets: ['satzbau-locale — keeps the PT, EN or DE language.', 'satzbau-theme — keeps the light or dark theme.', 'satzbau-analytics-consent — records whether you accepted or refused analytics and advertising.', 'satzbau-quiz-best — keeps the best quiz score on this device.'] },
          { title: 'Optional Google services', paragraphs: ['After you accept, Google Analytics helps measure aggregated usage and Google AdSense enables advertising to be displayed and measured. These services may create or read cookies and other identifiers under Google’s policies. If you refuse, Satzbau does not load their code.'] },
          { title: 'Changing your mind', paragraphs: ['Use the button below or “Manage cookies” in the footer. If you withdraw previously granted consent, the page reloads so optional services stop loading. You can also clear cookies and local storage directly in your browser.'] },
        ],
      },
      about: {
        kicker: 'THE PROJECT',
        title: 'About Satzbau',
        intro: 'A free tool for learning German in a visual, practical and less intimidating way.',
        sections: [
          { title: 'Why it exists', paragraphs: ['Satzbau was created by Bruno Rendeiro from the first-hand experience of learning German while living in Switzerland. Its purpose is to turn abstract rules into sentences you can build, hear and use in everyday life.'] },
          { title: 'Who it is for', paragraphs: ['It is especially useful for Portuguese and English speakers at beginner level who need German for work, transport, shopping, healthcare, public services and daily life in Switzerland.'] },
          { title: 'How it is maintained', paragraphs: ['The software and content are created and reviewed by Bruno Rendeiro with the assistance of AI tools during development. The main journeys are tested on mobile and desktop. Corrections and suggestions are welcome.'] },
          { title: 'Project model', paragraphs: ['Use is free. Advertising may help cover the domain, maintenance and development without blocking essential lessons. Satzbau is a complementary learning tool and does not replace a teacher or certified course.'] },
        ],
      },
      contact: {
        kicker: 'GET IN TOUCH',
        title: 'Contact',
        intro: 'Found an awkward phrase, a mistake or an idea for improving Satzbau? Write directly to the project owner.',
        sections: [
          { title: 'Bruno Rendeiro', paragraphs: ['Email: brunonrendeiro@gmail.com'] },
          { title: 'You can contact us about', bullets: ['German or translation corrections.', 'Technical and accessibility problems.', 'Privacy and data questions.', 'Partnerships or advertising relevant to German learners.'] },
          { title: 'Help us answer effectively', paragraphs: ['When reporting a problem, include the page, device and what you were trying to do. Do not send passwords, identity documents or other sensitive information.'] },
        ],
      },
    },
  },
  de: {
    contactAction: 'E-Mail senden',
    manageConsentAction: 'Cookie-Auswahl prüfen',
    resourcesTitle: 'Informationen und Einstellungen von Google',
    googleDataLink: 'Wie Google Daten auf Partner-Websites verwendet',
    adsSettingsLink: 'Google-Einstellungen für Werbung',
    analyticsOptOutLink: 'Browser-Add-on zur Deaktivierung von Google Analytics',
    pages: {
      privacy: {
        kicker: 'TRANSPARENZ',
        title: 'Datenschutzerklärung',
        intro: 'Satzbau vermittelt Deutsch, ohne ein Konto zu verlangen. Diese Seite erklärt verständlich, welche Daten verarbeitet werden können und welche Wahlmöglichkeiten du hast.',
        updated: 'Letzte Aktualisierung: 18. Oktober 2026',
        sections: [
          { title: 'Verantwortlicher und Kontakt', paragraphs: ['Verantwortlich für dieses Projekt ist Bruno Rendeiro. Bei Fragen zum Datenschutz, Berichtigungen oder Anfragen zu deinen Daten schreibe an brunonrendeiro@gmail.com.'] },
          { title: 'Was Satzbau auf deinem Gerät speichert', paragraphs: ['Die App hat keine Benutzerkonten, Nutzerprofile, eigenes Backend oder eigene Datenbank. Einige Einstellungen bleiben ausschließlich im lokalen Speicher deines Browsers, damit die App wie erwartet funktioniert.'], bullets: ['Gewählte Sprache.', 'Helles oder dunkles Design.', 'Einwilligungsentscheidung für Analyse und Werbung.', 'Beste Quiz-Punktzahl.'] },
          { title: 'Google Analytics und Google AdSense', paragraphs: ['Google Analytics und Google AdSense werden erst geladen, nachdem du Analyse- und Werbe-Cookies akzeptiert hast. Diese Dienste können Informationen wie IP-Adresse, Gerätedaten, besuchte Seiten, Interaktionen, Cookies, Kennungen und ähnliche Technologien verarbeiten.', 'Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auszuliefern und zu messen. Die Verwendung von Werbe-Cookies durch Google kann Anzeigen auf Grundlage früherer Besuche dieser und anderer Websites ermöglichen. Du kannst die Personalisierung in den Google-Einstellungen für Werbung steuern.', 'Speicherung und Verarbeitung durch Google richten sich nach den Kontoeinstellungen und den Richtlinien von Google. Satzbau erhält hauptsächlich zusammengefasste Informationen und versucht nicht, einzelne Besucher zu identifizieren.'] },
          { title: 'Audio der Sätze', paragraphs: ['Die Audio-Schaltfläche nutzt die Sprachsynthese deines Browsers oder Betriebssystems. Satzbau übergibt den Satz an diese Funktion, speichert ihn aber nicht in einer eigenen Datenbank. Die konkrete Verarbeitung hängt von Browser, Gerät und installierter Stimme ab.'] },
          { title: 'Wenn du uns eine E-Mail schickst', paragraphs: ['Bei einer Kontaktaufnahme erhalten wir deine Adresse, Nachricht und alle freiwillig enthaltenen Angaben. Wir verwenden sie nur zur Beantwortung und Bearbeitung der Anfrage und speichern sie nur so lange, wie es dafür vernünftigerweise erforderlich ist.'] },
          { title: 'Deine Wahlmöglichkeiten und Rechte', paragraphs: ['Du kannst Cookies jederzeit über „Cookies verwalten“ im Footer ablehnen oder neu auswählen. Den lokalen Speicher kannst du auch in den Browser-Einstellungen löschen. Für Auskunft, Berichtigung oder Löschung von per E-Mail übermittelten Informationen kontaktiere uns.'] },
          { title: 'Änderungen dieser Erklärung', paragraphs: ['Diese Erklärung kann aktualisiert werden, wenn sich die App, Anbieter oder geltende Anforderungen ändern. Das Datum oben kennzeichnet die aktuelle Version.'] },
        ],
      },
      cookies: {
        kicker: 'KONTROLLE',
        title: 'Cookies und lokaler Speicher',
        intro: 'Satzbau verwendet lokale Einstellungen für seine Funktionen und aktiviert Analyse- und Werbedienste erst nach deiner Auswahl.',
        updated: 'Letzte Aktualisierung: 18. Oktober 2026',
        sections: [
          { title: 'Funktionale Einstellungen', paragraphs: ['Diese Einträge bleiben in deinem Browser, bis du sie löschst. Sie werden nicht verwendet, um ein Konto oder persönliches Profil zu erstellen.'], bullets: ['satzbau-locale — speichert die Sprache PT, EN oder DE.', 'satzbau-theme — speichert das helle oder dunkle Design.', 'satzbau-analytics-consent — speichert, ob du Analyse und Werbung akzeptiert oder abgelehnt hast.', 'satzbau-quiz-best — speichert die beste Quiz-Punktzahl auf diesem Gerät.'] },
          { title: 'Optionale Google-Dienste', paragraphs: ['Nach deiner Zustimmung misst Google Analytics die zusammengefasste Nutzung und Google AdSense ermöglicht das Anzeigen und Messen von Werbung. Diese Dienste können gemäß den Google-Richtlinien Cookies und andere Kennungen erstellen oder lesen. Bei Ablehnung lädt Satzbau ihren Code nicht.'] },
          { title: 'Entscheidung ändern', paragraphs: ['Nutze die Schaltfläche unten oder „Cookies verwalten“ im Footer. Wenn du eine erteilte Einwilligung widerrufst, wird die Seite neu geladen, damit optionale Dienste nicht mehr geladen werden. Cookies und lokalen Speicher kannst du außerdem direkt im Browser löschen.'] },
        ],
      },
      about: {
        kicker: 'DAS PROJEKT',
        title: 'Über Satzbau',
        intro: 'Ein kostenloses Werkzeug, um Deutsch visuell, praktisch und weniger einschüchternd zu lernen.',
        sections: [
          { title: 'Warum es Satzbau gibt', paragraphs: ['Bruno Rendeiro entwickelte Satzbau aus seiner eigenen Erfahrung beim Deutschlernen in der Schweiz. Abstrakte Regeln werden zu Sätzen, die du bauen, hören und im Alltag verwenden kannst.'] },
          { title: 'Für wen es gedacht ist', paragraphs: ['Das Angebot richtet sich besonders an portugiesisch- und englischsprachige Anfänger, die Deutsch für Arbeit, Verkehr, Einkaufen, Gesundheit, Behörden und den Alltag in der Schweiz brauchen.'] },
          { title: 'Wie es gepflegt wird', paragraphs: ['Software und Inhalte werden von Bruno Rendeiro mit Unterstützung von KI-Werkzeugen bei der Entwicklung erstellt und geprüft. Die wichtigsten Abläufe werden auf Mobilgeräten und Desktop getestet. Korrekturen und Vorschläge sind willkommen.'] },
          { title: 'Projektmodell', paragraphs: ['Die Nutzung ist kostenlos. Werbung kann Domain, Wartung und Weiterentwicklung finanzieren, ohne wesentliche Lektionen zu blockieren. Satzbau ist ein ergänzendes Lernwerkzeug und ersetzt keine Lehrkraft oder zertifizierten Kurs.'] },
        ],
      },
      contact: {
        kicker: 'KONTAKT',
        title: 'Kontakt',
        intro: 'Hast du einen unnatürlichen Satz, einen Fehler oder eine Idee zur Verbesserung von Satzbau gefunden? Schreibe direkt an den Projektverantwortlichen.',
        sections: [
          { title: 'Bruno Rendeiro', paragraphs: ['E-Mail: brunonrendeiro@gmail.com'] },
          { title: 'Du kannst uns kontaktieren wegen', bullets: ['Korrekturen im Deutschen oder in Übersetzungen.', 'Technischen Problemen und Barrierefreiheit.', 'Fragen zu Datenschutz und Daten.', 'Partnerschaften oder Werbung, die für Deutschlernende relevant ist.'] },
          { title: 'So können wir besser antworten', paragraphs: ['Nenne bei einem Problem die Seite, das Gerät und was du tun wolltest. Sende keine Passwörter, Ausweisdokumente oder andere sensible Daten.'] },
        ],
      },
    },
  },
}
