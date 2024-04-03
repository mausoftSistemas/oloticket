const messages = {
  pt: {
    translations: {
      signup: {
        title: "Agregar",
        toasts: {
          success: "Usuario creado exitosamente!",
          fail: "Error al crear usuario, verifique los datos",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Clave",
        },
        buttons: {
          submit: "Agregar",
          login: "Ya tiene una cuenta? inicie sesión",
        },
      },
      login: {
        title: "Inicio Sesión",
        form: {
          email: "Email",
          password: "Clave",
        },
        buttons: {
          submit: "Entrar",
          register: "No tienes cuenta? Registrar",
        },
      },
      companies: {
        title: "Agregar Empresa",
        form: {
          name: "Nombre de Empresa",
          plan: "Planes",
          token: "Token",
          submit: "Agregar",
          success: "Empresa creada con exito!",
        },
      },
      auth: {
        toasts: {
          success: "iniciando...",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones de hoy:",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "Conexion de WPP eliminada",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Está seguro? Deberá escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar WhatApp",
          disconnect: "desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando lectura de QR Code",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y escanea el Código QR con tu celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida!",
          },
          timeout: {
            title: "Conexión celular perdida",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón Desconectar para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Status",
          lastUpdate: "Ultima actualización",
          default: "Estandar",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Estandar",
          sendIdQueue: "Sector",
          timeSendQueue: "Redirecionar para sector en X minutos",
          queueRedirection:"Redireccionamiento a sector",
          queueRedirectionDesc:"Seleccione un sector redirigir a los contactos sin categoría",

        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp Agregado exitosamente!",
      },
      qrCode: {
        message: "Escanea el QrCode para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado exitosamente!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar ",
          importTitlte: "Importar contatos",
          deleteMessage:
            "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los servicios relacionados.",
          importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
        },
        buttons: {
          import: "Importar Contatos",
          add: "Agragar contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acciones",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos de contacto",
          extraInfo: "Informaciones adicionales",
          name: "Nombre",
          number: "Número do Whatsapp",
          email: "Email",
          extraName: "Nombre de campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "Adicionar información",
          okAdd: "Agregar",
          okEdit: "guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado con exito!",
      },
      queueModal: {
        title: {
          add: "Agregar sector",
          edit: "Editar Sector",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de Saludo",
          complationMessage: "Mensaje de ticket concluído",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Mensaje de agradecimiento por evaluar la encuesta",
          token: "Token",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Agregar Usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "clave",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuário agregado con éxito!",
      },
      scheduleModal: {
        title: {
          add: "Nuevo horario",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Cita guardada con éxito!",
      },
      tagModal: {
        title: {
          add: "Nova Tag",
          edit: "Editar Tag",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Tag guardado!",
      },
      chat: {
        noTicketMessage: "Selecione un ticket",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
          titleFileList: "Lista de archivo(s)"
        },
      },      
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Sector",
      },
      tickets: {
        toasts: {
          deleted: "El servicio en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de ",
        },
        tabs: {
          open: { title: "Alertas" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar mensajes o atenciones",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir para sector",
        fieldQueuePlaceholder: "Selecione un sector",
        noOptions: "Ningún usuario encontrado con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando...",
        assignedHeader: "En curso",
        noTicketsTitle: "Nada por aquí",
        noTicketsMessage:
          "No se encontró ningúna atención con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          reopen: "Re abrir"
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Atendidos",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Filas & Chatbot",
          tags: "Tags",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciónes",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Agenda",
          campaigns: "Campañas",
          annoucements: "Notificaciones",
          chats: "Chat Interno",
          financeiro: "Financiero",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre de Archivo",
          media: "Archivo",
          token: "Token",
        },
      },
      notifications: {
        noTickets: "Ninguna notificación",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        buttons: {
          add: "Nueva Respuesta",
        },
        dialog: {
          shortcode: "Atajo",
          message: "Respues",
        },
      },
      contactLists: {
        title: "Lista de Contatos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro Borrado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar contactos desde esta hoja de cálculo o planilla?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro borrado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Lista de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Status",
          scheduledAt: "Planificación",
          completedAt: "Concluída",
          confirmation: "Confirmación",
          actions: "Acciones",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Sólo vista",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Status",
            scheduledAt: "Horario",
            confirmation: "Confirmación",
            contactList: "Lista de Contactos",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Intervalos",
            restart: "Reiniciar Intervalos",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro borrado",
        },
      },
      announcements: {
        title: "Notificaciones",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          contactLists: "Lista de Contactos",
        },
        table: {
          priority: "Prioridades",
          title: "título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Status",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición",
          add: "Nuevo",
          update: "Editar",
          readonly: "Solo lectura",
          form: {
            priority: "Prioridades",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Status",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro borrado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campaña",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Sector",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ningún sector asignado..",
        },
      },
      queueSelect: {
        inputLabel: "Sector",
      },
      users: {
        title: "Usuarios",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Usuario",
        },
        toasts: {
          deleted: "Usuario borrado con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Central de Ayuda",
      },
      schedules: {
        title: "Agenda",
        confirmationModal: {
          deleteTitle: "Esta seguro de borrar?",
          deleteMessage: "Esta acción no podra ser revertida",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de Envio",
          status: "Status",
          actions: "Acciónes",
        },
        buttons: {
          add: "Nuevo",
        },
        toasts: {
          deleted: "Borrado con éxito!",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
          deleteMessage: "Esta acción no podra ser revertida",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros con Etiquetas/Tags",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Tag",
        },
        toasts: {
          deleted: "Tag borrado con éxito!",
        },
      },
      settings: {
        success: "La configuración se guardó correctamente.",
        title: "Configuraciónes",
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído a:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escriba un mensaje",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Asignar",
      },
      contactDrawer: {
        header: "Datos de contactos",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otras informaciónes",
      },
      ticketOptionsMenu: {
        schedule: "Agendar",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observaciones",
        appointmentsModal: {
          title: "Observaciones",
          textarea: "Observaciones",
          placeholder: "Igrese aquí las obs",
        },
        confirmationModal: {
          title: "Eliminar el ticket del contacto",
          message:
            "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Consulta la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​se ha inicializado. Consulta la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Consulta la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Consulta la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada.",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha desactivado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontraron contactos con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta identificación.",
        ERR_NO_USER_FOUND: "No se encontraron usuarios con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhtasApp, quizás sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };