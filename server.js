import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
const PORT = Number(process.env.API_PORT || process.env.PORT || 3002);

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true,
}));
app.use(express.json({ limit: '1mb' }));

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'opa_db',
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0,
  charset: 'utf8mb4',
});

function normalizeString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function generateNumero() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `DEM-${y}${m}${d}-${random}`;
}

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, database: process.env.DB_NAME || 'opa_db' });
  } catch (error) {
    console.error('Erreur connexion BDD:', error);
    res.status(500).json({ ok: false, message: 'Connexion BDD impossible' });
  }
});

app.post('/api/demandes/public', async (req, res) => {
  const nom = normalizeString(req.body.nom);
  const prenom = normalizeString(req.body.prenom);
  const matricule = normalizeString(req.body.matricule);
  const wilaya = normalizeString(req.body.wilaya);
  const titre_demande = normalizeString(req.body.titre_demande);
  const priorite = normalizeString(req.body.priorite) || 'Normale';
  const num_tel = normalizeString(req.body.num_tel).replace(/[\s.-]/g, '');

  if (!nom || !prenom || !wilaya || !titre_demande || !num_tel) {
    return res.status(400).json({
      ok: false,
      message: 'Champs obligatoires manquants: nom, prenom, wilaya, titre_demande, num_tel',
    });
  }

  if (!/^(05|06|07)\d{8}$/.test(num_tel) && !/^0\d{8}$/.test(num_tel)) {
    return res.status(400).json({ ok: false, message: 'Numéro de téléphone invalide' });
  }

  const numero = generateNumero();

  try {
    const [result] = await pool.execute(
      `INSERT INTO demandes_site
        (nom, prenom, matricule, wilaya, titre_demande, priorite, date_creation, numero, statut, reponse, source, num_tel, affecte_a)
       VALUES
        (?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?, ?, ?)`,
      [
        nom,
        prenom,
        matricule || null,
        wilaya,
        titre_demande,
        priorite,
        numero,
        'Nouveau',
        '',
        'site',
        num_tel,
        null,
      ]
    );

    res.status(201).json({
      ok: true,
      id: result.insertId,
      numero,
      message: 'Demande enregistrée avec succès',
    });
  } catch (error) {
    console.error('Erreur insertion demandes_site:', error);
    res.status(500).json({
      ok: false,
      message: 'Erreur lors de l’insertion en base de données',
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: 'Route API introuvable' });
});

app.listen(PORT, () => {
  console.log(`API demandes démarrée: http://localhost:${PORT}`);
  console.log(`BDD: ${process.env.DB_NAME || 'opa_db'} @ ${process.env.DB_HOST || '127.0.0.1'}`);
});
