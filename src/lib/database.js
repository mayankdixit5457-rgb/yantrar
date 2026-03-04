import { ID, Query } from 'appwrite';
import { databases, storage } from './appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const databaseService = {
  // Create a new document
  async createDocument(data) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        data
      );
    } catch (error) {
      console.error("Appwrite service :: createDocument :: error", error);
      throw error;
    }
  },

  // Get a list of documents
  async getDocuments(queries = []) {
    try {
      return await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getDocuments :: error", error);
      throw error;
    }
  },

  // Update a document
  async updateDocument(documentId, data) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId,
        data
      );
    } catch (error) {
      console.error("Appwrite service :: updateDocument :: error", error);
      throw error;
    }
  },

  // Delete a document
  async deleteDocument(documentId) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteDocument :: error", error);
      return false;
    }
  }
};

export default databaseService;
