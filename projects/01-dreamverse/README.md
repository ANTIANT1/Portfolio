# 🌌 DreamVerse - Sandbox MMORPG

> **Статус:** В активной разработке | **Дата запуска:** 2024 | **Прогресс:** MVP 60%

## 📖 Описание

DreamVerse — это инновационная Sandbox MMORPG с процедурной генерацией контента на основе искусственного интеллекта. Игра использует AI-кузнеца (Demiurge) для создания уникального оружия, живых NPC с памятью и личностью, а также Web3 технологии для владения игровыми активами.

## 🎯 Ключевые особенности

### 🤖 Demiurge - AI-кузнец
- Генерация уникального оружия на основе текстовых описаний (GPT-4o)
- 12 форм трансформации оружия
- Система редкости: Common → Legendary
- Динамический расчет баланса (Mass Density System)

### 🧬 Система генов
- **Divine Genes** - положительные эффекты
- **Devil Genes** - проклятия с высокой силой
- Мутации и комбинации до 3 генов на оружие

### 🤝 Living NPC
- Автономные агенты с долговременной памятью
- Динамические диалоги через OpenAI API
- Tier-система (T1-T4) с разными уровнями сложности
- ERC-6551 кошельки для NFT-владения

### 🌍 Decentralized Compute (DCP)
- Polygon zkEVM для игровых активов
- Распределенные вычисления для процедурной генерации
- Proof-of-Generation для валидации AI-контента

## 🛠 Технологический стек

### Backend
- **FastAPI** (Python) - REST API
- **PostgreSQL** - основная БД
- **SQLite** - база знаний
- **OpenAI API** (GPT-4o) - AI генерация
- **WebSocket** - реального времени коммуникация

### Game Engine
- **Unreal Engine 5** - игровой движок
- **MCP Server** - интеграция AI с движком
- **UnrealMCP Plugin** - коммуникация через сокеты
- **FlopAI Plugin** - AI-агенты в игре

### Blockchain
- **Polygon zkEVM** - Layer 2 для низких комиссий
- **Solidity** - смарт-контракты
- **ERC-721** - NFT оружия и земель
- **ERC-6551** - токен-bound аккаунты для NPC

### Infrastructure
- **Docker** - контейнеризация
- **n8n** - автоматизация процессов
- **Obsidian** - база знаний (185 нод)
- **Git** - версионирование

## 📊 Архитектура

```
┌─────────────────┐
│  Unreal Engine  │ ←──→ MCP Server ←──→ FastAPI Backend
│   (Game Client) │       (AI Bridge)         (REST API)
└─────────────────┘                               ↓
                                           ┌──────────────┐
                                           │   OpenAI     │
                                           │   GPT-4o     │
                                           └──────────────┘
                                                   ↓
┌─────────────────────────────────────────────────────────┐
│                 Polygon zkEVM Blockchain                │
│  Weapons NFT | Land NFT | Materials | Living NPC        │
└─────────────────────────────────────────────────────────┘
```

## 🎮 Текущий функционал

### ✅ Реализовано (90%+)
- [x] FastAPI Backend (порт 8000)
- [x] OpenAI интеграция для генерации оружия
- [x] MCP Server с 21 командой (порт 55557)
- [x] Система базы знаний (SQLite + Obsidian)
- [x] Процедурная генерация названий и статов
- [x] YAML frontmatter для метаданных

### 🚧 В разработке (Sprint 1.3-1.4)
- [ ] Living NPC система (дизайн готов 100%)
- [ ] Blockchain интеграция
- [ ] Solidity контракты для NFT
- [ ] ERC-6551 для NPC-кошельков
- [ ] 3D визуализация оружия

### 📋 В планах (Sprint 2.0+)
- [ ] Система крафта материалов
- [ ] Land NFT с волнами Genesis → Infinity
- [ ] Distributed Compute Protocol
- [ ] Система гильдий и кланов

## 📁 Структура проекта

```
Dreamverse/
├── AGENT_PROTOCOL.md              # Правила для AI-агентов
├── DREAMVERSE_FUNDAMENTAL_v3.md   # Каноничный дизайн-документ
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── services/demiurge_chat.py  # GPT-4o интеграция
│   │   └── api/v1/endpoints/
│   └── requirements.txt
├── unreal-mcp/
│   ├── unreal_mcp_server_advanced.py  # Главный MCP сервер
│   └── helpers/                       # Процедурная генерация
├── UnrealProject/
│   └── Plugins/
│       ├── UnrealMCP/                 # Socket сервер
│       └── FlopAI/                    # AI агенты
├── data/
│   └── dreamverse.db                  # База знаний
├── knowledge-base/
│   └── KnowledgeGraph/                # Obsidian vault (185 нод)
└── contracts/
    └── DreamVerseItems.sol            # Solidity контракты
```

## 🎯 Ключевые метрики

- **Строк кода:** ~15,000+
- **API endpoints:** 25+
- **MCP команд:** 21
- **Нод в графе знаний:** 185
- **Дизайн документов:** 50+

## 🔗 Связанные ресурсы

- 📖 [Документация API](http://localhost:8000/docs)
- 🎮 [MCP Server](http://localhost:55557)
- 🧠 [Knowledge Graph](../knowledge-base/KnowledgeGraph/)
- 📊 [Obsidian Vault](../knowledge-base/)

## 🏆 Уникальные технологии

1. **MCP Bridge** - собственный протокол для AI ↔ Unreal Engine
2. **Demiurge System** - AI генерация с детерминированным балансом
3. **Living NPC Protocol** - автономные агенты с ERC-6551
4. **Mass Density System** - физическая модель для баланса оружия
5. **Gene Mutation Algorithm** - процедурная система наследования

## 📈 Этапы развития

### Phase 1: Core Mechanics (Текущая)
- Боевая система
- AI генерация контента
- Базовый мультиплеер

### Phase 2: Economy & Web3
- NFT marketplace
- Land ownership
- DCP nodes

### Phase 3: Living World
- AI NPC ecosystem
- Dynamic events
- Player-driven economy

---

**Последнее обновление:** Январь 2026
**Репозиторий:** `C:\Users\chr-w\Desktop\Dreamverse\`
**Лицензия:** Proprietary
