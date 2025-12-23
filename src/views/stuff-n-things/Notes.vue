<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import { generateSimpleID } from "@/lib/utils";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

type Note = {
  title: string;
  content: string;
};

const notes = useStorage<Record<string, Note>>("notes", {});

const currentNoteID = ref<string>();
const currentNote = ref<Note>({ title: "", content: "" });
const isEditingNote = ref(false);

const isNewNote = ref(false);
const newNote = ref<Note>({ title: "Untitled note", content: "" });

function resetNewNoteForm() {
  newNote.value = { title: "Untitled note", content: "" };
}

function closeNewNote() {
  isNewNote.value = false;
  resetNewNoteForm();
}

function saveNote() {
  const newId = generateSimpleID();
  notes.value[newId] = newNote.value;
  closeNewNote();
}

function clickNote(id: string, note: Note) {
  currentNoteID.value = id;
  currentNote.value = note;
}

function updateNote() {
  if (!currentNoteID.value) return;
  notes.value[currentNoteID.value] = currentNote.value;
  isEditingNote.value = false;
}

function closeNote() {
  currentNoteID.value = undefined;
  currentNote.value = { title: "", content: "" };
  isEditingNote.value = false;
}

function deleteNote() {
  if (confirm("Are you sure to delete note?") && currentNoteID.value) {
    delete notes.value[currentNoteID.value];
    closeNote();
  }
}
</script>

<template>
  <main>
    <div id="toolbar">
      <h1>Notes</h1>
      <button type="button" @click="isNewNote = true">Add</button>
    </div>
    <div class="card-group">
      <a
        v-for="(note, id) in notes"
        class="card"
        href="#"
        @click="clickNote(id, note)">
        <div class="card-title">{{ note.title }}</div>
        <div class="card-description">
          {{ note.content.slice(0, 100) }}
        </div>
      </a>
    </div>

    <!-- New note modal -->
    <Modal
      :is-open="isNewNote"
      title="New Note"
      @onClickClose="isNewNote = false">
      <template v-slot:body>
        <form id="newNoteForm" @submit.prevent="saveNote">
          <label for="title">Title {{ newNote.title }}</label>
          <input type="text" name="title" id="title" v-model="newNote.title" />
          <label for="content">Content {{ newNote.content }}</label>
          <textarea
            name="content"
            id="content"
            v-model="newNote.content"></textarea>
        </form>
      </template>
      <template v-slot:footer>
        <button type="submit" form="newNoteForm">Save</button>
      </template>
    </Modal>

    <!-- Editing note modal -->
    <Modal
      :is-open="currentNoteID != undefined"
      :title="isEditingNote ? 'Editting note' : currentNote.title"
      @onClickClose="closeNote">
      <template v-slot:body v-if="isEditingNote">
        <form id="editingNoteForm" @submit.prevent="updateNote">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            v-model="currentNote.title" />
          <label for="content">Content</label>
          <textarea
            name="content"
            id="content"
            v-model="currentNote.content"></textarea>
        </form>
      </template>
      <template v-slot:body v-else>
        <p>{{ currentNote.content }}</p>
      </template>
      <template v-slot:footer v-if="isEditingNote">
        <button type="submit" form="editingNoteForm">Update</button>
      </template>
      <template v-slot:footer v-else>
        <button type="button" @click="isEditingNote = true">Edit</button>
        <button type="button" @click="deleteNote">Delete</button>
      </template>
    </Modal>
  </main>
</template>

<style scoped>
main {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
}

#toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

form {
  input[name="title"],
  textarea {
    width: 100%;
  }
}
</style>
