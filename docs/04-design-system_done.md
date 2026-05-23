# 04-design-system

## Direção visual

Sensação desejada::
- acolhimento;
- leveza;
- confiança;
- autoridade suave;
- premium minimalista.

Evitar:
- visual genérico de template WordPress de psicologia;
- excesso de bordas decorativas;
- sombras pesadas;
- excesso de rosa;
- aparência clínica fria.

### Design tokens

Colors:
export const colors = {
  background: '#F8F5F1',
  surface: '#EFE7DE',
  text: '#5E4B43',
  textSoft: '#7A685F',
  accent: '#B8745C',
  accentSoft: '#D4A091',
  border: '#E7DDD4',
}

Radius
sm: 8
md: 16
lg: 24
xl: 32

Shadows

Muito suaves. Preferir blur leve. Nunca usar shadow agressiva.

Layout

Container max-width: 1280px

Spacing: 8px scale.

Sections: padding vertical generoso.

Motion

Apenas microinterações.

Usar:

fade;
subtle translateY;
hover suave.

Evitar:

parallax pesado;
animações chamativas.
