---
applyTo: "docs/**/*.md"
description: "Use when working on project documentation or deciding implementation order from the blueprint files."
---

- Always follow the numbered order in `docs/`.
- When a new doc appears, read it before extending the implementation.
- Do not jump ahead to later sections if an earlier doc still has open work.
- Keep changes aligned with the architecture and domain model in the docs.

## Regra: Marcação de arquivos Markdown concluídos

- Ao concluir um desenvolvimento que altere ou finalize um arquivo Markdown sob `docs/` (ou outro conteúdo documental relevante), adicione uma marcação no nome do arquivo para indicar que o trabalho foi finalizado. Use um sufixo `_done` ou um prefixo `done_` (ex.: `sprint-01-foundation_done.md` ou `done_sprint-01-foundation.md`).
- Essa marcação deve ser suficiente para que ferramentas, revisores e processos ignorem temporariamente o arquivo marcado quando um novo contexto for aberto.
- Se for necessário reabrir o contexto ou continuar o trabalho no mesmo arquivo, remova a marcação antes de editar, ou crie uma nova versão sem a marcação.
- Mantemos a liberdade de escolher sufixo ou prefixo conforme preferência da equipe, mas seja consistente por sprint/projeto.

Observação: A marcação é apenas uma convenção leve de fluxo de trabalho — não substitui alterações de controle de versão ou rótulos de PR/issue.
