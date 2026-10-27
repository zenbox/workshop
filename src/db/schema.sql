CREATE TABLE IF NOT EXISTS users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL CHECK (length(trim(name)) > 0),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS sheep (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL CHECK (length(trim(name)) > 0),
  breed      TEXT NOT NULL,
  age        INTEGER NOT NULL CHECK (age BETWEEN 0 AND 25),
  gender     TEXT NOT NULL CHECK (gender IN ('female', 'male')),
  icon_key   TEXT NOT NULL DEFAULT 'sheep',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_sheep_user ON sheep(user_id);

-- Demo-Konto, bleibt vorerst fest (Auth kommt in v4)
INSERT OR IGNORE INTO users (id, name) VALUES (1, 'Demo');