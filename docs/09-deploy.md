## Deploy

### MongoDB Atlas

1. Criar um cluster free.
2. Criar usuário com permissão `readWrite`.
3. Liberar acesso de `0.0.0.0/0` no IP access list para ambiente de produção inicial.
4. Configurar `DATABASE_URI` no formato de conexão do Atlas.
5. Manter `MONGODB_URI` como alias local, se necessário, mas padronizar `DATABASE_URI` no deploy.

### Vercel

Variáveis de ambiente:

- `DATABASE_URI`
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ANALYTICS_ID`

Passos:

1. Conectar o repositório no Vercel.
2. Adicionar as env vars acima.
3. Definir o domínio final em `NEXT_PUBLIC_SITE_URL`.
4. Publicar com build padrão do Next.js.

### Netlify

O frontend está preparado para Next.js, mas o Payload admin e o backend ficam mais estáveis no Vercel.

Se usar Netlify, prefira apenas o frontend estático ou um setup separado para o Payload.

### HostGator compartilhado

Hospedagem compartilhada não é a melhor opção para um Payload CMS completo com Node.js.

Uso recomendado:

- apenas espelhar o frontend estático, se houver suporte;
- ou manter o projeto principal em Vercel e usar HostGator somente para conteúdo legado temporário.

### Analytics

Preparar um provider desacoplado e não hardcodear Google Analytics.

Usar `NEXT_PUBLIC_ANALYTICS_ID` apenas quando o provider estiver definido.
