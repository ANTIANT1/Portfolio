# 🎮 AI Game Studio - Automated Tabletop Game Generator

> **Статус:** MVP v1.0 | **Дата запуска:** 2026 | **Прогресс:** 85%

## 📖 Описание

AI Game Studio — автоматизированная система генерации настольных игр для Tabletop Simulator. Превращает текстовые идеи в полностью готовые к игре прототипы за 3-5 минут с помощью LLM-агентов, RAG-архитектуры и AI-генерации арта.

## 🎯 Ключевая идея

```
"космическая стратегия с торговлей"
         ↓ 3-5 минут
  Готовый .json мод для TTS
  (GDD + 20 карт + арт + баланс)
```

## ✨ Ключевые особенности

### 🤖 Multi-Agent Pipeline
- **Concept Agent** — генерация GDD, лора, глоссария
- **Designer Agent** — создание карт с mana curve
- **Writer Agent** — полировка текстов (tone of voice)

### 🔍 Hybrid Search (META-RAG)
- Semantic (70%) + BM25 (30%)
- BGG Top-100 + Steam Workshop как база знаний
- Advanced Chunking (parent-child, semantic)

### 🎨 AI Art Generation
- Flux Schnell через Replicate API (750x1050px)
- Atlas Builder — sprite sheets (10x7 grid)
- Mock режим для разработки без затрат

### 📦 TTS Export
- Полностью готовые .json моды для Tabletop Simulator
- XML templates через Jinja2
- Auto-balance (mana curve, rarity distribution)

## 🛠 Технологический стек

- **Python 3.11+** — основной язык
- **Claude Sonnet 4.5** (Anthropic) — LLM-агенты
- **ChromaDB** — векторная БД (semantic search)
- **BM25** — keyword search
- **Replicate** — генерация изображений (Flux Schnell)
- **Typer** — CLI интерфейс
- **Pydantic** — валидация данных
- **Jinja2** — XML шаблоны

## 💰 Стоимость одной игры (~20 карт)

| Компонент | Цена |
|-----------|------|
| Claude Sonnet 4.5 | ~$0.40 |
| Replicate (арт) | ~$0.06 |
| **Итого** | **~$0.46** |

## 📊 Performance

- **Full pipeline:** 3-5 минут
- **Meta-RAG query:** < 2 сек
- **Designer Agent (20 карт):** ~1 минута

## 🎮 Пример использования

```bash
# Создать проект
python -m src.cli.main create "pirate card game with resource management" --cards 20 --name pirates

# Экспортировать в TTS
python -m src.cli.main export pirates --output pirates.json

# Загрузить в Tabletop Simulator и играть 🎲
```

## 📈 Статус

### ✅ Реализовано
- Multi-agent pipeline (Concept + Designer + Writer)
- Hybrid Search META-RAG
- Steam Workshop парсинг и анализ
- TTS .json экспорт
- AI-генерация арта (Replicate)
- CLI интерфейс
- Unit & integration тесты

### 🚧 В разработке (v1.1)
- Balancer Agent
- ComfyUI full integration
- Docker контейнеризация
- 70%+ test coverage

### 📋 В планах (v1.2+)
- Web UI (Streamlit)
- Fine-tuning на Workshop dataset
- Cloud deployment
- Public API

---

**Последнее обновление:** Февраль 2026
**Репозиторий:** `C:\Users\chr-w\Desktop\AI GAME STUDIO\`
**GitHub:** https://github.com/ANTIANT1/AI-Game-Studio
**Лицензия:** MIT
