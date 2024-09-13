const API_URL = 'http://localhost:8080/students-subjects';

export const fetchStudentSubjects = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const fetchStudentSubject = async (studentId, subjectId) => {
    const response = await fetch(`${API_URL}/${studentId}/${subjectId}`);
    return response.json();
};

export const createStudentSubject = async (studentSubject) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentSubject)
    });
    return response.json();
};

export const updateStudentSubject = async (studentId, subjectId, studentSubject) => {
    const response = await fetch(`${API_URL}/${studentId}/${subjectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentSubject)
    });
    return response.json();
};

export const deleteStudentSubject = async (studentId, subjectId) => {
    await fetch(`${API_URL}/${studentId}/${subjectId}`, { method: 'DELETE' });
};
