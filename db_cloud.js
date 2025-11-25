import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const col = collection(db, "veiculos");

// 🔥 Carregar todos os veículos da nuvem
export async function loadCloudDB() {
  const snap = await getDocs(col);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// 🔥 Salvar novo veículo
export async function saveCloudVehicle(data) {
  const docRef = await addDoc(col, data);
  return docRef.id;
}

// 🔥 Atualizar veículo
export async function updateCloudVehicle(id, data) {
  const ref = doc(db, "veiculos", id);
  await updateDoc(ref, data);
}
