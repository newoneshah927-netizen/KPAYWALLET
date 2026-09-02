// ============================================================
// HBS (Hazara Board System) - Complete Application
// ============================================================

// ============================================================
// CONSTANTS & CONFIGURATION
// ============================================================

const DB_NAME = 'HBS_DB_V7';
const DB_VERSION = 7;
const KPAY_NUMBER = '03001234567';
const KPAY_NAME = 'KASHAN';

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => toast.remove(), 500);
  }, 5000);
}

function getGrade(percentage) {
  if (percentage >= 90) return { grade: 'A+', color: 'grade-Aplus' };
  if (percentage >= 80) return { grade: 'A', color: 'grade-A' };
  if (percentage >= 70) return { grade: 'B', color: 'grade-B' };
  if (percentage >= 60) return { grade: 'C', color: 'grade-C' };
  if (percentage >= 50) return { grade: 'D', color: 'grade-D' };
  return { grade: 'F', color: 'grade-F' };
}

function generateRandomName() {
  const firstNames = ['Muhammad', 'Ali', 'Ahmed', 'Usman', 'Omar', 'Hassan', 'Hussain', 'Zain', 'Rayan', 'Ayan', 'Ibrahim', 'Yusuf', 'Musa', 'Isa', 'Yahya'];
  const lastNames = ['Khan', 'Ali', 'Ahmed', 'Hussain', 'Shah', 'Mirza', 'Chaudhry', 'Malik', 'Qureshi', 'Hashmi'];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
}

function generateRandomFatherName() {
  const names = ['Abdul Rahman', 'Abdul Malik', 'Abdul Qadir', 'Abdul Ghafoor', 'Abdul Aziz', 'Muhammad', 'Ali', 'Ahmed', 'Usman', 'Omar'];
  return names[Math.floor(Math.random() * names.length)];
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active-page'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active-page');
  
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.page === pageId);
  });
}

// ============================================================
// DATABASE MODULE
// ============================================================

let db = null;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (e) => reject(e.target.error);
    request.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      
      if (!db.objectStoreNames.contains('admin')) {
        db.createObjectStore('admin', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('teachers')) {
        const store = db.createObjectStore('teachers', { keyPath: 'id' });
        store.createIndex('subject', 'subject', { unique: false });
      }
      if (!db.objectStoreNames.contains('students')) {
        const store = db.createObjectStore('students', { keyPath: 'roll' });
        store.createIndex('session', 'session', { unique: false });
      }
      if (!db.objectStoreNames.contains('papers')) {
        const store = db.createObjectStore('papers', { keyPath: 'id', autoIncrement: true });
        store.createIndex('teacher', 'teacher', { unique: false });
        store.createIndex('roll', 'roll', { unique: false });
        store.createIndex('checked', 'checked', { unique: false });
        store.createIndex('session', 'session', { unique: false });
        store.createIndex('subject', 'subject', { unique: false });
      }
      if (!db.objectStoreNames.contains('checkedPapers')) {
        const store = db.createObjectStore('checkedPapers', { keyPath: 'id', autoIncrement: true });
        store.createIndex('teacher', 'teacher', { unique: false });
        store.createIndex('roll', 'roll', { unique: false });
        store.createIndex('session', 'session', { unique: false });
        store.createIndex('subject', 'subject', { unique: false });
      }
      if (!db.objectStoreNames.contains('teacherRequests')) {
        const store = db.createObjectStore('teacherRequests', { keyPath: 'id', autoIncrement: true });
        store.createIndex('status', 'status', { unique: false });
      }
      if (!db.objectStoreNames.contains('editors')) {
        db.createObjectStore('editors', { keyPath: 'name' });
      }
      if (!db.objectStoreNames.contains('resultSheets')) {
        const store = db.createObjectStore('resultSheets', { keyPath: 'roll' });
        store.createIndex('session', 'session', { unique: false });
        store.createIndex('uploaded', 'uploaded', { unique: false });
        store.createIndex('published', 'published', { unique: false });
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('recheckRequests')) {
        const store = db.createObjectStore('recheckRequests', { keyPath: 'id', autoIncrement: true });
        store.createIndex('roll', 'roll', { unique: false });
        store.createIndex('status', 'status', { unique: false });
        store.createIndex('session', 'session', { unique: false });
        store.createIndex('subject', 'subject', { unique: false });
      }
      if (!db.objectStoreNames.contains('studentLogins')) {
        db.createObjectStore('studentLogins', { keyPath: 'roll' });
      }
      if (!db.objectStoreNames.contains('activityLogs')) {
        const store = db.createObjectStore('activityLogs', { keyPath: 'id', autoIncrement: true });
        store.createIndex('user', 'user', { unique: false });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

function putData(storeName, data) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.put(data);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getData(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getAllData(storeName) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function deleteData(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.delete(key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function getByIndex(storeName, indexName, value) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const index = store.index(indexName);
    const request = index.getAll(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function logActivity(user, action, details = '') {
  const log = {
    user: user,
    action: action,
    details: details,
    timestamp: new Date().toISOString()
  };
  await putData('activityLogs', log);
}

// ============================================================
// AUTHENTICATION MODULE
// ============================================================

let currentUser = null;

async function initializeData() {
  const admin = await getData('admin', 'admin');
  if (!admin) {
    await putData('admin', { id: 'admin', password: 'admin123', name: 'HBS Admin' });
  }

  const sessionSetting = await getData('settings', 'currentSession');
  if (!sessionSetting) {
    await putData('settings', { key: 'currentSession', value: 2026 });
    await putData('settings', { key: 'level', value: 2001 });
    await putData('settings', { key: 'resultsPublished', value: false });
  }

  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const students = await getAllData('students');
  const sessionStudents = students.filter(s => s.session === currentSession);
  
  if (sessionStudents.length === 0) {
    const subjects = ['English', 'Urdu', 'Computer', 'Math', 'Physics', 'Biology'];
    const subjectTeachers = {
      'English': 'Ms. Ayesha',
      'Urdu': 'Ms. Bushra',
      'Computer': 'Prof. Zafar',
      'Math': 'Mr. Ahmad',
      'Physics': 'Ms. Fatima',
      'Biology': 'Ms. Sara'
    };
    for (let i = 1; i <= 30; i++) {
      const roll = currentSession * 100 + i;
      const name = `Student ${roll}`;
      const fatherName = generateRandomFatherName();
      const papers = {};
      subjects.forEach(sub => {
        papers[sub] = { marks: 0, checked: false, teacher: subjectTeachers[sub] || 'Unknown', paperType: 'Final' };
      });
      await putData('students', { 
        roll, name, papers, session: currentSession,
        fatherName: fatherName,
        dob: '2000-01-01',
        address: 'Hazara, Pakistan',
        profilePic: '',
        password: 'student123'
      });
      await putData('studentLogins', { roll, password: 'student123' });
    }
  }

  const teachers = await getAllData('teachers');
  if (teachers.length === 0) {
    const initialTeachers = [
      { id: 20001, name: 'Mr. Ahmad', subject: 'Math', city: 'Abbottabad', qual: 'M.Sc. Math', exp: '7 years' },
      { id: 20002, name: 'Ms. Bushra', subject: 'Urdu', city: 'Islamabad', qual: 'M.A. Urdu', exp: '5 years' },
      { id: 20003, name: 'Prof. Zafar', subject: 'Computer', city: 'Karachi', qual: 'Ph.D. CS', exp: '10 years' },
      { id: 20004, name: 'Ms. Fatima', subject: 'Physics', city: 'Lahore', qual: 'M.Sc. Physics', exp: '4 years' },
      { id: 20005, name: 'Ms. Sara', subject: 'Biology', city: 'Rawalpindi', qual: 'M.Sc. Biology', exp: '5 years' },
      { id: 20006, name: 'Ms. Ayesha', subject: 'English', city: 'Islamabad', qual: 'M.A. English', exp: '6 years' },
    ];
    for (const t of initialTeachers) {
      await putData('teachers', t);
    }
  }

  const existingPapers = await getAllData('papers');
  const sessionPapers = existingPapers.filter(p => p.session === currentSession);
  
  if (sessionPapers.length === 0) {
    const teachersList = await getAllData('teachers');
    const studentsList = await getAllData('students');
    const sessionStudentsList = studentsList.filter(s => s.session === currentSession);
    
    for (const student of sessionStudentsList) {
      for (const teacher of teachersList) {
        const sub = teacher.subject;
        if (student.papers[sub]) {
          await putData('papers', {
            roll: student.roll,
            studentName: student.name,
            subject: sub,
            teacher: teacher.name,
            teacherId: teacher.id,
            marks: 0,
            checked: false,
            session: currentSession,
            paperType: 'Final'
          });
        }
      }
    }
  }

  const editors = await getAllData('editors');
  if (editors.length === 0) {
    await putData('editors', { name: 'editor1', pass: 'editor123' });
    await putData('editors', { name: 'editor2', pass: 'editor456' });
  }
}

async function handleLogin(id, pass) {
  const admin = await getData('admin', 'admin');
  if (id === 'admin' && pass === admin.password) {
    currentUser = { id: 'admin', name: admin.name, role: 'admin' };
    await logActivity('admin', 'Login', 'Admin logged in');
    return { success: true, user: currentUser };
  }

  const teachers = await getAllData('teachers');
  const teacher = teachers.find(t => t.id.toString() === id && pass === 'teacher123');
  if (teacher) {
    currentUser = { 
      id: teacher.id, 
      name: teacher.name, 
      role: 'teacher', 
      subject: teacher.subject 
    };
    await logActivity(teacher.name, 'Login', 'Teacher logged in');
    return { success: true, user: currentUser };
  }

  const editors = await getAllData('editors');
  const editor = editors.find(e => e.name === id && e.pass === pass);
  if (editor) {
    currentUser = { id: 'editor_' + Date.now(), name: editor.name, role: 'editor' };
    await logActivity(editor.name, 'Login', 'Editor logged in');
    return { success: true, user: currentUser };
  }

  const studentLogin = await getData('studentLogins', parseInt(id));
  if (studentLogin && studentLogin.password === pass) {
    const student = await getData('students', parseInt(id));
    if (student) {
      currentUser = { id: student.roll, name: student.name, role: 'student' };
      await logActivity(student.roll, 'Login', 'Student logged in');
      return { success: true, user: currentUser };
    }
  }

  return { success: false, message: 'Invalid credentials!' };
}

function logout() {
  if (currentUser) {
    logActivity(currentUser.name || currentUser.id, 'Logout', 'User logged out');
  }
  currentUser = null;
  updateUserUI();
  showPage('pageLogin');
  showToast('Logged out.', 'info');
}

// ============================================================
// TEACHER DASHBOARD MODULE
// ============================================================

async function renderDashboard(section) {
  if (!currentUser || currentUser.role !== 'teacher') return;
  
  const teacherName = currentUser.name;
  const teacherSubject = currentUser.subject;
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  let html = '';

  if (section === 'papers') {
    const allPapers = await getAllData('papers');
    const assigned = allPapers.filter(p => 
      p.teacher === teacherName && 
      p.subject === teacherSubject && 
      !p.checked && 
      p.session === currentSession
    );
    
    if (assigned.length === 0) {
      html = `<div class="stat-card"><p><i class="fas fa-check-circle" style="color:#1e7e34;"></i> No papers pending for ${teacherSubject}.</p></div>`;
    } else {
      html = `<div class="stat-card"><h3>${teacherSubject} Papers to Check (50 marks each)</h3></div>`;
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Type</th><th>Marks (0-50)</th><th>Action</th></tr></thead><tbody>`;
      for (const p of assigned) {
        html += `<tr><td>${p.roll}</td><td>${p.subject}</td><td>${p.paperType || 'Final'}</td>
                  <td><input type="number" min="0" max="50" id="marks_${p.id}" value="0" style="width:70px;padding:0.3rem;border-radius:30px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.3);"></td>
                  <td><button class="btn-primary btn-success" onclick="markPaperChecked(${p.id})"><i class="fas fa-check"></i> Submit</button></td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  } else if (section === 'history') {
    const checkedPapers = await getAllData('checkedPapers');
    const all = checkedPapers.filter(p => 
      p.teacher === teacherName && 
      p.subject === teacherSubject && 
      p.session === currentSession
    );
    html = `<div class="stat-card"><p>Total ${teacherSubject} papers checked: ${all.length}</p></div>`;
    if (all.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Marks</th></tr></thead><tbody>`;
      for (const p of all) {
        html += `<tr><td>${p.roll}</td><td>${p.subject}</td><td>${p.marks}/50</td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  } else if (section === 'recheck') {
    const rechecks = await getAllData('recheckRequests');
    const pending = rechecks.filter(r => 
      r.status === 'pending' && 
      r.teacher === teacherName && 
      r.subject === teacherSubject
    );
    html = `<div class="stat-card"><h3>${teacherSubject} Recheck Requests (${pending.length})</h3></div>`;
    if (pending.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Current Marks</th><th>Action</th></tr></thead><tbody>`;
      for (const r of pending) {
        html += `<tr><td>${r.roll}</td><td>${r.subject}</td><td>${r.currentMarks}/50</td>
                  <td>
                    <button class="btn-success" onclick="approveRecheck(${r.id})"><i class="fas fa-check"></i> Approve</button>
                    <button class="btn-danger" onclick="rejectRecheck(${r.id})"><i class="fas fa-times"></i> Reject</button>
                  </td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  }
  
  document.getElementById('dashContent').innerHTML = html;
}

window.markPaperChecked = async function(id) {
  const marksInput = document.getElementById(`marks_${id}`);
  const marks = parseInt(marksInput.value);
  
  if (isNaN(marks) || marks < 0 || marks > 50) {
    showToast('Enter marks between 0 and 50.', 'error');
    return;
  }
  
  const paper = await getData('papers', id);
  if (paper) {
    if (paper.teacher !== currentUser.name) {
      showToast('❌ You are not assigned to check this paper.', 'error');
      return;
    }
    if (paper.subject !== currentUser.subject) {
      showToast(`❌ You can only check ${paper.subject} papers.`, 'error');
      return;
    }
    
    paper.marks = marks;
    paper.checked = true;
    await deleteData('papers', id);
    await putData('checkedPapers', paper);
    
    const student = await getData('students', paper.roll);
    if (student) {
      if (student.papers[paper.subject]) {
        student.papers[paper.subject].marks = marks;
        student.papers[paper.subject].checked = true;
        await putData('students', student);
      }
    }
    await logActivity(currentUser.name, 'Checked Paper', `${paper.subject} - ${paper.roll} marks: ${marks}`);
    showToast(`✅ Paper checked! Marks: ${marks}/50`, 'success');
    await renderDashboard('papers');
  }
};

window.approveRecheck = async function(id) {
  const req = await getData('recheckRequests', id);
  if (req) {
    if (req.teacher !== currentUser.name) {
      showToast('❌ You are not assigned to this recheck request.', 'error');
      return;
    }
    if (req.subject !== currentUser.subject) {
      showToast(`❌ You can only approve recheck for ${req.subject}.`, 'error');
      return;
    }
    
    req.status = 'approved';
    await putData('recheckRequests', req);
    
    const student = await getData('students', req.roll);
    if (student && student.papers[req.subject]) {
      const newMarks = prompt(`Enter new marks for ${req.subject} (0-50):`, req.currentMarks);
      if (newMarks !== null) {
        const val = parseInt(newMarks);
        if (!isNaN(val) && val >= 0 && val <= 50) {
          student.papers[req.subject].marks = val;
          await putData('students', student);
          
          const checkedPapers = await getAllData('checkedPapers');
          const paper = checkedPapers.find(p => p.roll === req.roll && p.subject === req.subject);
          if (paper) {
            paper.marks = val;
            await putData('checkedPapers', paper);
          }
          await logActivity(currentUser.name, 'Approved Recheck', `${req.subject} - ${req.roll} new marks: ${val}`);
          showToast(`✅ Recheck approved! New marks: ${val}/50`, 'success');
        }
      }
    }
    await renderDashboard('recheck');
  }
};

window.rejectRecheck = async function(id) {
  const req = await getData('recheckRequests', id);
  if (req) {
    if (req.teacher !== currentUser.name) {
      showToast('❌ You are not assigned to this recheck request.', 'error');
      return;
    }
    req.status = 'rejected';
    await putData('recheckRequests', req);
    await logActivity(currentUser.name, 'Rejected Recheck', `${req.subject} - ${req.roll}`);
    await renderDashboard('recheck');
    showToast(`❌ Recheck rejected for ${req.subject}`, 'error');
  }
};

// ============================================================
// STUDENT PORTAL MODULE
// ============================================================

async function renderStudentPortal(section) {
  if (!currentUser || currentUser.role !== 'student') return;
  
  const roll = currentUser.id;
  const student = await getData('students', roll);
  if (!student) {
    document.getElementById('studentPortalDisplay').innerHTML = `<div class="stat-card"><p>Student data not found.</p></div>`;
    return;
  }
  
  document.getElementById('studentPortalName').textContent = student.name;
  document.getElementById('studentPortalRoll').textContent = student.roll;
  document.getElementById('studentPortalSession').textContent = student.session || '-';
  
  if (student.profilePic) {
    document.getElementById('studentPortalProfilePic').innerHTML = `<img src="${student.profilePic}" class="profile-pic" alt="Profile">`;
  } else {
    document.getElementById('studentPortalProfilePic').innerHTML = `<i class="fas fa-user-circle" style="font-size:80px;color:#1e3b5a;"></i>`;
  }

  let html = '';
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;

  if (section === 'result') {
    const sheet = await getData('resultSheets', roll);
    if (!sheet || !sheet.uploaded) {
      html = `<div class="stat-card"><p>Result not available yet.</p></div>`;
    } else {
      const grade = getGrade(sheet.percentage);
      html = `<div class="result-sheet">
        <div class="header">
          <h2>HBS · Hazara Board</h2>
          <p>Official Result Sheet - Session ${sheet.session}</p>
        </div>
        <div class="row"><span class="label">Roll Number</span><span class="value">${sheet.roll}</span></div>
        <div class="row"><span class="label">Student Name</span><span class="value">${sheet.name}</span></div>
        <div class="row"><span class="label">Father's Name</span><span class="value">${student.fatherName || 'N/A'}</span></div>
        <div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>`;
      
      for (const [sub, marks] of Object.entries(sheet.marks)) {
        html += `<div class="row"><span class="label">${sub}</span><span class="value">${marks} / 50</span></div>`;
      }
      
      html += `<div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>
        <div class="row"><span class="label">Total Marks</span><span class="value">${sheet.total} / 300</span></div>
        <div class="row"><span class="label">Percentage</span><span class="value">${sheet.percentage}%</span></div>
        <div class="row"><span class="label">Grade</span><span class="value ${grade.color}">${grade.grade}</span></div>
        <div class="stamp"><i class="fas fa-stamp"></i> Editor: ${sheet.editor || 'HBS'}</div>
      </div>`;
    }
  } else if (section === 'profile') {
    html = `<div class="stat-card">
      <h3>Profile Information</h3>
      <div class="row"><span class="label">Name</span><span class="value">${student.name}</span></div>
      <div class="row"><span class="label">Father's Name</span><span class="value">${student.fatherName || 'N/A'}</span></div>
      <div class="row"><span class="label">Date of Birth</span><span class="value">${student.dob || 'N/A'}</span></div>
      <div class="row"><span class="label">Address</span><span class="value">${student.address || 'N/A'}</span></div>
      <div class="row"><span class="label">Roll Number</span><span class="value">${student.roll}</span></div>
      <div class="row"><span class="label">Session</span><span class="value">${student.session}</span></div>
    </div>`;
  } else if (section === 'recheck') {
    const rechecks = await getAllData('recheckRequests');
    const myRechecks = rechecks.filter(r => r.roll === roll);
    const pendingRecheck = myRechecks.find(r => r.status === 'pending');
    
    html = `<div class="stat-card">
      <h3>Apply for Recheck</h3>
      
      <div class="kpay-box">
        <i class="fas fa-mobile-alt" style="font-size:2rem;color:#ffd700;"></i>
        <p style="margin-top:0.5rem;">Send Rs. 2,500 via KPAY to:</p>
        <div class="number">${KPAY_NUMBER}</div>
        <div class="name">Account Holder: ${KPAY_NAME}</div>
        <div class="instruction">
          <i class="fas fa-info-circle"></i> 
          After payment, send screenshot to Editor for approval.
        </div>
      </div>
      
      <p><i class="fas fa-dollar-sign"></i> Fee: Rs. 2,500 per paper</p>
      <p>If you believe your marks are incorrect, you can apply for rechecking.</p>
      ${pendingRecheck ? `<div class="recheck-card" style="background:rgba(243,156,18,0.2);">
        <p><i class="fas fa-clock"></i> Your recheck request for ${pendingRecheck.subject} is pending.</p>
      </div>` : `
      <form id="recheckForm">
        <div class="form-group">
          <label>Select Subject</label>
          <select class="form-control" id="recheckSubject">
            ${Object.keys(student.papers).map(sub => `<option value="${sub}">${sub}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Reason for Recheck</label>
          <textarea class="form-control" id="recheckReason" rows="3" placeholder="Explain why you think marks should be rechecked..."></textarea>
        </div>
        <div class="form-group">
          <label>Payment Screenshot URL (upload image and paste link)</label>
          <input class="form-control" id="paymentScreenshot" placeholder="https://example.com/screenshot.jpg">
        </div>
        <button class="btn-primary" type="submit"><i class="fas fa-dollar-sign"></i> Pay Rs. 2,500 & Apply</button>
      </form>`}
    </div>`;
    if (myRechecks.length > 0 && !pendingRecheck) {
      html += `<div class="stat-card"><h4>Previous Recheck Requests</h4>`;
      for (const r of myRechecks) {
        const statusColor = r.status === 'approved' ? '#2ecc71' : r.status === 'rejected' ? '#e74c3c' : '#f39c12';
        html += `<div class="row"><span>${r.subject}</span>
          <span style="color:${statusColor};">${r.status.toUpperCase()}</span>
        </div>`;
      }
      html += `</div>`;
    }
  } else if (section === 'history') {
    const checkedPapers = await getAllData('checkedPapers');
    const myPapers = checkedPapers.filter(p => p.roll === roll && p.session === currentSession);
    html = `<div class="stat-card"><h3>Previous Results History</h3></div>`;
    if (myPapers.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Subject</th><th>Marks</th><th>Teacher</th></tr></thead><tbody>`;
      for (const p of myPapers) {
        html += `<tr><td>${p.subject}</td><td>${p.marks}/50</td><td>${p.teacher}</td></tr>`;
      }
      html += `</tbody></table></div>`;
    } else {
      html += `<p>No history available.</p>`;
    }
  }
  
  document.getElementById('studentPortalDisplay').innerHTML = html;

  document.getElementById('recheckForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const subject = document.getElementById('recheckSubject').value;
    const reason = document.getElementById('recheckReason').value.trim() || 'No reason provided';
    const screenshot = document.getElementById('paymentScreenshot').value.trim() || 'No screenshot provided';
    
    const currentMarks = student.papers[subject]?.marks || 0;
    const teacherName = student.papers[subject]?.teacher || 'Unknown';
    
    await putData('recheckRequests', {
      roll: roll,
      name: student.name,
      subject: subject,
      currentMarks: currentMarks,
      reason: reason,
      fee: 2500,
      status: 'pending',
      paymentScreenshot: screenshot,
      session: currentSession,
      teacher: teacherName,
      createdAt: new Date().toISOString()
    });
    await logActivity(roll, 'Recheck Request', `Applied for recheck in ${subject}`);
    showToast('✅ Recheck request submitted! Awaiting teacher approval.', 'success');
    await renderStudentPortal('recheck');
  });
}

// ============================================================
// EDITOR MODULE
// ============================================================

async function renderEditor(section) {
  if (!currentUser || currentUser.role !== 'editor') return;
  
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const published = await getData('settings', 'resultsPublished');
  const isPublished = published ? published.value : false;
  let html = '';

  if (section === 'students') {
    const students = await getAllData('students');
    const sessionStudents = students.filter(s => s.session === currentSession);
    html = `<div class="stat-card"><h3>Session ${currentSession} - ${sessionStudents.length} Students</h3></div>`;
    html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Father</th><th>Status</th></tr></thead><tbody>`;
    for (const s of sessionStudents) {
      const allChecked = Object.values(s.papers).every(p => p.checked);
      const sheet = await getData('resultSheets', s.roll);
      const uploaded = sheet ? sheet.uploaded : false;
      let status = allChecked ? '✅ All checked' : '⏳ Pending';
      if (allChecked && uploaded) status = '✅ Result uploaded';
      if (allChecked && isPublished) status = '🌐 Published';
      html += `<tr><td>${s.roll}</td><td>${s.name}</td><td>${s.fatherName || 'N/A'}</td><td>${status}</td></tr>`;
    }
    html += `</tbody></table></div>`;
  } else if (section === 'create') {
    const students = await getAllData('students');
    const sessionStudents = students.filter(s => s.session === currentSession);
    const incompleteStudents = sessionStudents.filter(s => !Object.values(s.papers).every(p => p.checked));
    
    if (incompleteStudents.length > 0) {
      html = `<div class="stat-card"><p><i class="fas fa-clock" style="color:#f39c12;"></i> ${incompleteStudents.length} students have incomplete marks.</p></div>`;
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Missing</th></tr></thead><tbody>`;
      for (const s of incompleteStudents) {
        const missing = Object.entries(s.papers).filter(([key, val]) => !val.checked).map(([key]) => key).join(', ');
        html += `<tr><td>${s.roll}</td><td>${s.name}</td><td>${missing}</td></tr>`;
      }
      html += `</tbody></table></div>`;
    } else {
      const existingSheets = await getAllData('resultSheets');
      const sessionSheets = existingSheets.filter(s => s.session === currentSession);
      if (sessionSheets.length === 30) {
        html = `<div class="stat-card"><p><i class="fas fa-check-circle" style="color:#1e7e34;"></i> All 30 result sheets already created!</p></div>`;
      } else {
        html = `<div class="stat-card"><p><i class="fas fa-check-circle" style="color:#1e7e34;"></i> All students have complete marks!</p></div>`;
        html += `<button class="btn-primary" onclick="createAllResultSheets()"><i class="fas fa-file-alt"></i> Create All 30 Result Sheets</button>`;
      }
    }
  } else if (section === 'upload') {
    const resultSheets = await getAllData('resultSheets');
    const sessionSheets = resultSheets.filter(s => s.session === currentSession && !s.uploaded);
    
    if (isPublished) {
      html = `<div class="stat-card" style="background:rgba(46,160,67,0.2);"><p><i class="fas fa-check-circle" style="color:#1e7e34;"></i> Results are already published online!</p></div>`;
    } else if (sessionSheets.length === 0) {
      html = `<div class="stat-card"><p><i class="fas fa-check-circle" style="color:#1e7e34;"></i> All result sheets uploaded!</p></div>`;
    } else {
      html = `<div class="stat-card"><h3>${sessionSheets.length} Result Sheets Ready</h3></div>`;
      for (const sheet of sessionSheets) {
        const student = await getData('students', sheet.roll);
        const grade = getGrade(sheet.percentage);
        html += `<div class="result-sheet" style="margin:1rem 0;max-width:100%;">
          <div class="header">
            <h2>HBS · Hazara Board</h2>
            <p>Result Sheet - Session ${sheet.session}</p>
          </div>
          <div class="row"><span class="label">Roll Number</span><span class="value">${sheet.roll}</span></div>
          <div class="row"><span class="label">Student Name</span><span class="value">${sheet.name}</span></div>
          <div class="row"><span class="label">Father's Name</span><span class="value">${student ? student.fatherName : 'N/A'}</span></div>
          <div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>`;
        let total = 0;
        for (const [sub, marks] of Object.entries(sheet.marks)) {
          html += `<div class="row"><span class="label">${sub}</span><span class="value">${marks} / 50</span></div>`;
          total += marks;
        }
        html += `<div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>
          <div class="row"><span class="label">Total Marks</span><span class="value">${total} / 300</span></div>
          <div class="row"><span class="label">Percentage</span><span class="value">${((total/300)*100).toFixed(1)}%</span></div>
          <div class="row"><span class="label">Grade</span><span class="value ${grade.color}">${grade.grade}</span></div>
          <div class="stamp"><i class="fas fa-stamp"></i> Editor: ${sheet.editor || currentUser.name}</div>
          <div class="upload-btn">
            <button class="btn-primary" onclick="uploadSingleResult(${sheet.roll})"><i class="fas fa-upload"></i> Upload This Result</button>
          </div>
        </div>`;
      }
      html += `<div class="mt-3"><button class="btn-primary btn-success" onclick="uploadAllResults()"><i class="fas fa-upload"></i> Upload All 30 Results</button></div>`;
    }
  } else if (section === 'published') {
    const publishedSetting = await getData('settings', 'resultsPublished');
    const isPublished = publishedSetting ? publishedSetting.value : false;
    
    if (isPublished) {
      html = `<div class="stat-card" style="background:rgba(46,160,67,0.2);">
        <p><i class="fas fa-globe" style="color:#1e7e34;font-size:2rem;"></i></p>
        <h3>Results are PUBLISHED!</h3>
        <p>Students can now view results by entering their roll number.</p>
        <button class="btn-primary btn-danger" onclick="unpublishResults()"><i class="fas fa-times"></i> Unpublish</button>
      </div>`;
    } else {
      const resultSheets = await getAllData('resultSheets');
      const sessionSheets = resultSheets.filter(s => s.session === currentSession && s.uploaded);
      if (sessionSheets.length === 30) {
        html = `<div class="stat-card" style="background:rgba(243,156,18,0.2);">
          <p><i class="fas fa-clock" style="color:#f39c12;font-size:2rem;"></i></p>
          <h3>Ready to Publish!</h3>
          <p>All 30 result sheets are uploaded. Click below to publish online.</p>
          <button class="btn-primary btn-success" onclick="publishResults()"><i class="fas fa-globe"></i> Publish All Results</button>
        </div>`;
      } else {
        html = `<div class="stat-card"><p><i class="fas fa-info-circle"></i> ${sessionSheets.length}/30 result sheets uploaded. Upload all first.</p></div>`;
      }
    }
  } else if (section === 'edit') {
    const resultSheets = await getAllData('resultSheets');
    const sessionSheets = resultSheets.filter(s => s.session === currentSession && s.uploaded);
    if (sessionSheets.length === 0) {
      html = `<div class="stat-card"><p>No uploaded results to edit.</p></div>`;
    } else {
      html = `<div class="stat-card"><h3>Edit Marks</h3><p>Select a student to edit their marks</p></div>`;
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Action</th></tr></thead><tbody>`;
      for (const sheet of sessionSheets) {
        html += `<tr><td>${sheet.roll}</td><td>${sheet.name}</td>
                  <td><button class="btn-primary btn-warning" onclick="editStudentMarks(${sheet.roll})"><i class="fas fa-pen"></i> Edit</button></td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  } else if (section === 'recheckPayments') {
    const rechecks = await getAllData('recheckRequests');
    const pending = rechecks.filter(r => r.status === 'pending');
    html = `<div class="stat-card"><h3>Recheck Payment Verification (${pending.length})</h3></div>`;
    if (pending.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Screenshot</th><th>Action</th></tr></thead><tbody>`;
      for (const r of pending) {
        html += `<tr><td>${r.roll}</td><td>${r.subject}</td>
                  <td>${r.paymentScreenshot && r.paymentScreenshot !== 'No screenshot provided' ? 
                    `<a href="${r.paymentScreenshot}" target="_blank"><i class="fas fa-image"></i> View</a>` : 
                    'No screenshot'}</td>
                  <td>
                    <button class="btn-success" onclick="verifyPayment(${r.id})"><i class="fas fa-check"></i> Verify Payment</button>
                  </td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  }
  
  document.getElementById('editorContent').innerHTML = html;
}

window.verifyPayment = async function(id) {
  const recheck = await getData('recheckRequests', id);
  if (recheck) {
    recheck.paymentVerified = true;
    await putData('recheckRequests', recheck);
    await logActivity(currentUser.name, 'Verified Payment', `Verified payment for ${recheck.subject} - ${recheck.roll}`);
    showToast('✅ Payment verified! Teacher can now approve recheck.', 'success');
    await renderEditor('recheckPayments');
  }
};

window.editStudentMarks = async function(roll) {
  const sheet = await getData('resultSheets', roll);
  if (!sheet) return;
  
  let html = `<div class="stat-card">
    <h3>Edit Marks for ${sheet.name} (Roll: ${sheet.roll})</h3>
    <form id="editMarksForm">`;
  for (const [sub, marks] of Object.entries(sheet.marks)) {
    html += `<div class="form-group">
      <label>${sub}</label>
      <input class="form-control" type="number" min="0" max="50" id="edit_${sub}" value="${marks}">
    </div>`;
  }
  html += `<button class="btn-primary" type="submit"><i class="fas fa-save"></i> Save Changes</button>
    <button class="btn-primary btn-danger" onclick="document.getElementById('editMarksForm').remove();location.reload();">Cancel</button>
  </form></div>`;
  
  const container = document.createElement('div');
  container.id = 'editMarksContainer';
  container.innerHTML = html;
  const parent = document.getElementById('editorContent');
  const old = parent.querySelector('#editMarksContainer');
  if (old) old.remove();
  parent.appendChild(container);
  
  document.getElementById('editMarksForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    let total = 0;
    for (const sub of Object.keys(sheet.marks)) {
      const val = parseInt(document.getElementById(`edit_${sub}`).value);
      if (isNaN(val) || val < 0 || val > 50) {
        showToast(`Invalid marks for ${sub}. Must be 0-50.`, 'error');
        return;
      }
      sheet.marks[sub] = val;
      total += val;
    }
    sheet.total = total;
    sheet.percentage = ((total/300)*100).toFixed(1);
    sheet.uploaded = false;
    await putData('resultSheets', sheet);
    await logActivity(currentUser.name, 'Edited Marks', `Edited marks for roll ${roll}`);
    showToast(`✅ Marks updated for ${sheet.name}! Please re-upload.`, 'success');
    document.getElementById('editMarksContainer').remove();
    await renderEditor('edit');
  });
};

window.createAllResultSheets = async function() {
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const students = await getAllData('students');
  const sessionStudents = students.filter(s => s.session === currentSession);
  
  let created = 0;
  for (const student of sessionStudents) {
    const existingSheet = await getData('resultSheets', student.roll);
    if (!existingSheet) {
      const marks = {};
      let total = 0;
      for (const [sub, data] of Object.entries(student.papers)) {
        marks[sub] = data.marks || 0;
        total += data.marks || 0;
      }
      const percentage = (total/300)*100;
      const grade = getGrade(percentage);
      await putData('resultSheets', {
        roll: student.roll,
        name: student.name,
        marks: marks,
        total: total,
        percentage: percentage.toFixed(1),
        grade: grade.grade,
        session: currentSession,
        uploaded: false,
        published: false,
        editor: currentUser ? currentUser.name : 'Editor'
      });
      created++;
    }
  }
  await logActivity(currentUser.name, 'Created Result Sheets', `Created ${created} sheets`);
  showToast(`✅ ${created} result sheets created! Go to Upload tab.`, 'success');
  await renderEditor('upload');
};

window.uploadSingleResult = async function(roll) {
  const sheet = await getData('resultSheets', roll);
  if (sheet) {
    sheet.uploaded = true;
    await putData('resultSheets', sheet);
    await logActivity(currentUser.name, 'Uploaded Result', `Uploaded roll ${roll}`);
    await renderEditor('upload');
    showToast(`✅ Result for roll ${roll} uploaded!`, 'success');
  }
};

window.uploadAllResults = async function() {
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const resultSheets = await getAllData('resultSheets');
  const sessionSheets = resultSheets.filter(s => s.session === currentSession && !s.uploaded);
  
  let uploaded = 0;
  for (const sheet of sessionSheets) {
    sheet.uploaded = true;
    await putData('resultSheets', sheet);
    uploaded++;
  }
  await logActivity(currentUser.name, 'Uploaded All Results', `Uploaded ${uploaded} results`);
  showToast(`✅ ${uploaded} results uploaded!`, 'success');
  await renderEditor('upload');
};

window.publishResults = async function() {
  if (confirm('Publish all results online? Students will be able to view.')) {
    await putData('settings', { key: 'resultsPublished', value: true });
    const resultSheets = await getAllData('resultSheets');
    const session = await getData('settings', 'currentSession');
    const currentSession = session ? session.value : 2026;
    const sessionSheets = resultSheets.filter(s => s.session === currentSession);
    for (const sheet of sessionSheets) {
      sheet.published = true;
      await putData('resultSheets', sheet);
    }
    await logActivity(currentUser.name, 'Published Results', 'Published all results');
    await renderEditor('published');
    showToast('🌐 Results published online!', 'success');
  }
};

window.unpublishResults = async function() {
  if (confirm('Unpublish results?')) {
    await putData('settings', { key: 'resultsPublished', value: false });
    await renderEditor('published');
    showToast('Results unpublished.', 'info');
  }
};

// ============================================================
// ADMIN MODULE
// ============================================================

async function renderAdmin(section) {
  if (!currentUser || currentUser.role !== 'admin') return;
  
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const level = await getData('settings', 'level');
  const currentLevel = level ? level.value : 2001;
  let html = '';

  if (section === 'students') {
    const students = await getAllData('students');
    const sessionStudents = students.filter(s => s.session === currentSession);
    html = `<div class="stat-card"><h3>Session ${currentSession} - ${sessionStudents.length} Students</h3></div>`;
    html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Father</th>`;
    const subjects = ['English', 'Urdu', 'Computer', 'Math', 'Physics', 'Biology'];
    subjects.forEach(s => { html += `<th>${s}</th>`; });
    html += `<th>Status</th></tr></thead><tbody>`;
    for (const s of sessionStudents) {
      html += `<tr><td>${s.roll}</td><td>${s.name}</td><td>${s.fatherName || 'N/A'}</td>`;
      subjects.forEach(sub => {
        const p = s.papers[sub];
        html += `<td>${p && p.checked ? p.marks : '-'}</td>`;
      });
      const allChecked = Object.values(s.papers).every(p => p.checked);
      html += `<td>${allChecked ? '✅ Complete' : '⏳ Pending'}</td></tr>`;
    }
    html += `</tbody></table></div>`;
  } else if (section === 'bulkUpload') {
    html = `<div class="stat-card">
      <h3>Bulk Upload Students</h3>
      <p>Upload CSV with columns: name, fatherName, dob, address, session (optional)</p>
      <div class="form-group">
        <label>CSV File</label>
        <input type="file" class="form-control" id="csvFile" accept=".csv">
      </div>
      <button class="btn-primary" onclick="bulkUploadStudents()"><i class="fas fa-upload"></i> Upload CSV</button>
      <div id="bulkUploadStatus" class="mt-3"></div>
    </div>`;
  } else if (section === 'teachers') {
    const requests = await getAllData('teacherRequests');
    const teachers = await getAllData('teachers');
    html = `<h4>Pending (${requests.filter(r => r.status === 'pending').length})</h4>`;
    const pending = requests.filter(r => r.status === 'pending');
    if (pending.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Subject</th><th>Action</th></tr></thead><tbody>`;
      for (const r of pending) {
        html += `<tr><td>${r.name}</td><td>${r.subject}</td>
                  <td><button class="btn-success" onclick="approveTeacher(${r.id})"><i class="fas fa-check"></i></button>
                  <button class="btn-danger" onclick="rejectTeacher(${r.id})"><i class="fas fa-times"></i></button></td></tr>`;
      }
      html += `</tbody></table></div>`;
    } else {
      html += `<p>No pending requests.</p>`;
    }
    html += `<h4>Hired Teachers (${teachers.length}/25)</h4>`;
    if (teachers.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Subject</th></tr></thead><tbody>`;
      for (const t of teachers) {
        html += `<tr><td>${t.id}</td><td>${t.name}</td><td>${t.subject}</td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  } else if (section === 'papers') {
    const papers = await getAllData('papers');
    const checkedPapers = await getAllData('checkedPapers');
    const allPapers = [...papers.filter(p => p.session === currentSession), ...checkedPapers.filter(p => p.session === currentSession)];
    html = `<div class="stat-card"><h3>Total Papers: ${allPapers.length}</h3></div>`;
    html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Teacher</th><th>Type</th><th>Marks</th><th>Status</th></tr></thead><tbody>`;
    for (const p of allPapers.slice(0, 30)) {
      const status = p.checked ? '✅ Checked' : '⏳ Pending';
      html += `<tr><td>${p.roll}</td><td>${p.subject}</td><td>${p.teacher}</td><td>${p.paperType || 'Final'}</td><td>${p.marks || 0}/50</td><td>${status}</td></tr>`;
    }
    html += `</tbody></table></div>`;
  } else if (section === 'session') {
    html = `<div class="stat-card"><h3>Session: ${currentSession} | Level: ${currentLevel}</h3></div>`;
    html += `<div class="flex-row">
      <button class="btn-primary" onclick="nextSession()"><i class="fas fa-forward"></i> Next Session</button>
      <button class="btn-primary btn-danger" onclick="resetSession()"><i class="fas fa-sync"></i> Reset Session</button>
    </div>`;
  } else if (section === 'editors') {
    const editors = await getAllData('editors');
    html = `<div class="stat-card"><h3>Editors (${editors.length})</h3></div>`;
    html += `<div class="flex-row">
      <input class="form-control" style="max-width:200px;" id="editorName" placeholder="Name">
      <input class="form-control" style="max-width:200px;" id="editorPass" placeholder="Password">
      <button class="btn-primary" onclick="addEditor()"><i class="fas fa-plus"></i> Add Editor</button>
    </div>`;
    if (editors.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Password</th></tr></thead><tbody>`;
      for (const e of editors) {
        html += `<tr><td>${e.name}</td><td>${e.pass}</td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  } else if (section === 'logs') {
    const logs = await getAllData('activityLogs');
    const recent = logs.slice(-50).reverse();
    html = `<div class="stat-card"><h3>Recent Activity (${logs.length} total)</h3></div>`;
    html += `<div class="table-wrap"><table><thead><tr><th>User</th><th>Action</th><th>Details</th><th>Time</th></tr></thead><tbody>`;
    for (const log of recent) {
      html += `<tr><td>${log.user}</td><td>${log.action}</td><td>${log.details || ''}</td><td>${new Date(log.timestamp).toLocaleString()}</td></tr>`;
    }
    html += `</tbody></table></div>`;
  } else if (section === 'recheck') {
    const rechecks = await getAllData('recheckRequests');
    const pending = rechecks.filter(r => r.status === 'pending');
    const approved = rechecks.filter(r => r.status === 'approved');
    const rejected = rechecks.filter(r => r.status === 'rejected');
    
    html = `<div class="stat-card"><h3>Recheck Requests</h3>
      <p>Pending: ${pending.length} | Approved: ${approved.length} | Rejected: ${rejected.length}</p>
    </div>`;
    if (rechecks.length > 0) {
      html += `<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Subject</th><th>Current Marks</th><th>Fee</th><th>Status</th><th>Teacher</th></tr></thead><tbody>`;
      for (const r of rechecks) {
        const statusColor = r.status === 'approved' ? '#2ecc71' : r.status === 'rejected' ? '#e74c3c' : '#f39c12';
        html += `<tr><td>${r.roll}</td><td>${r.subject}</td><td>${r.currentMarks}/50</td><td>Rs. ${r.fee}</td>
                  <td style="color:${statusColor};">${r.status.toUpperCase()}</td><td>${r.teacher || 'N/A'}</td></tr>`;
      }
      html += `</tbody></table></div>`;
    }
  }
  
  document.getElementById('adminContent').innerHTML = html;
}

window.bulkUploadStudents = async function() {
  const fileInput = document.getElementById('csvFile');
  const statusDiv = document.getElementById('bulkUploadStatus');
  
  if (!fileInput.files || !fileInput.files[0]) {
    statusDiv.innerHTML = 'Please select a CSV file.';
    return;
  }
  
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = async function(e) {
    const text = e.target.result;
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim());
    const session = await getData('settings', 'currentSession');
    const currentSession = session ? session.value : 2026;
    let added = 0;
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const data = {};
      headers.forEach((h, idx) => data[h] = values[idx] || '');
      
      const roll = currentSession * 100 + (i);
      const name = data.name || `Student ${roll}`;
      const fatherName = data.fatherName || generateRandomFatherName();
      const subjects = ['English', 'Urdu', 'Computer', 'Math', 'Physics', 'Biology'];
      const papers = {};
      const teachers = await getAllData('teachers');
      
      subjects.forEach(sub => {
        const teacher = teachers.find(t => t.subject === sub);
        papers[sub] = { marks: 0, checked: false, teacher: teacher ? teacher.name : 'Unknown', paperType: 'Final' };
      });
      
      await putData('students', {
        roll: roll,
        name: name,
        fatherName: fatherName,
        dob: data.dob || '2000-01-01',
        address: data.address || 'Hazara, Pakistan',
        profilePic: '',
        papers: papers,
        session: parseInt(data.session) || currentSession,
        password: 'student123'
      });
      await putData('studentLogins', { roll, password: 'student123' });
      added++;
    }
    statusDiv.innerHTML = `✅ ${added} students uploaded successfully!`;
    showToast(`✅ ${added} students uploaded!`, 'success');
    await logActivity('admin', 'Bulk Upload', `Uploaded ${added} students`);
  };
  reader.readAsText(file);
};

window.approveTeacher = async function(id) {
  const req = await getData('teacherRequests', id);
  if (req && req.status === 'pending') {
    const teachers = await getAllData('teachers');
    if (teachers.length >= 25) {
      showToast('Max 25 teachers hired!', 'error');
      return;
    }
    req.status = 'approved';
    await putData('teacherRequests', req);
    const newId = 20000 + teachers.length + 1;
    await putData('teachers', { 
      id: newId, 
      name: req.name, 
      subject: req.subject,
      city: req.city, 
      qual: req.qual, 
      exp: req.exp 
    });
    await logActivity('admin', 'Approved Teacher', `${req.name} - ${req.subject}`);
    await renderAdmin('teachers');
    showToast(`✅ ${req.name} approved! ID: ${newId}`, 'success');
  }
};

window.rejectTeacher = async function(id) {
  const req = await getData('teacherRequests', id);
  if (req) {
    req.status = 'rejected';
    await putData('teacherRequests', req);
    await renderAdmin('teachers');
    showToast(`❌ ${req.name} rejected.`, 'error');
  }
};

window.addEditor = async function() {
  const name = document.getElementById('editorName')?.value.trim();
  const pass = document.getElementById('editorPass')?.value.trim();
  if (!name || !pass) { showToast('Enter name and password', 'error'); return; }
  await putData('editors', { name, pass });
  await logActivity('admin', 'Added Editor', name);
  await renderAdmin('editors');
  showToast('✅ Editor added!', 'success');
  document.getElementById('editorName').value = '';
  document.getElementById('editorPass').value = '';
};

window.nextSession = async function() {
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  const newSession = currentSession + 1;
  await putData('settings', { key: 'currentSession', value: newSession });
  const level = await getData('settings', 'level');
  await putData('settings', { key: 'level', value: (level ? level.value : 2001) + 1 });
  await putData('settings', { key: 'resultsPublished', value: false });
  
  const subjects = ['English', 'Urdu', 'Computer', 'Math', 'Physics', 'Biology'];
  const teachers = await getAllData('teachers');
  
  for (let i = 1; i <= 30; i++) {
    const roll = newSession * 100 + i;
    const name = `Student ${roll}`;
    const fatherName = generateRandomFatherName();
    const papers = {};
    subjects.forEach(sub => {
      const teacher = teachers.find(t => t.subject === sub);
      papers[sub] = { marks: 0, checked: false, teacher: teacher ? teacher.name : 'Unknown', paperType: 'Final' };
    });
    await putData('students', { 
      roll, name, papers, session: newSession,
      fatherName: fatherName,
      dob: '2000-01-01',
      address: 'Hazara, Pakistan',
      profilePic: '',
      password: 'student123'
    });
    await putData('studentLogins', { roll, password: 'student123' });
    
    for (const teacher of teachers) {
      const sub = teacher.subject;
      if (papers[sub]) {
        await putData('papers', {
          roll: roll,
          studentName: name,
          subject: sub,
          teacher: teacher.name,
          teacherId: teacher.id,
          marks: 0,
          checked: false,
          session: newSession,
          paperType: 'Final'
        });
      }
    }
  }
  await logActivity('admin', 'Next Session', `Created session ${newSession}`);
  await updateUserUI();
  showToast(`✅ Session ${newSession} created with 30 students.`, 'success');
};

window.resetSession = async function() {
  if (confirm('Delete all data for current session?')) {
    const session = await getData('settings', 'currentSession');
    const currentSession = session ? session.value : 2026;
    
    const papers = await getAllData('papers');
    for (const p of papers) {
      if (p.session === currentSession) await deleteData('papers', p.id);
    }
    const checkedPapers = await getAllData('checkedPapers');
    for (const p of checkedPapers) {
      if (p.session === currentSession) await deleteData('checkedPapers', p.id);
    }
    const students = await getAllData('students');
    for (const s of students) {
      if (s.session === currentSession) await deleteData('students', s.roll);
      await deleteData('studentLogins', s.roll);
    }
    const resultSheets = await getAllData('resultSheets');
    for (const s of resultSheets) {
      if (s.session === currentSession) await deleteData('resultSheets', s.roll);
    }
    const rechecks = await getAllData('recheckRequests');
    for (const r of rechecks) {
      if (r.session === currentSession) await deleteData('recheckRequests', r.id);
    }
    await logActivity('admin', 'Reset Session', `Reset session ${currentSession}`);
    showToast(`✅ Session ${currentSession} reset.`, 'success');
    await renderAdmin('session');
  }
};

// ============================================================
// MAIN APP - UI UPDATE & EVENT LISTENERS
// ============================================================

async function updateUserUI() {
  const session = await getData('settings', 'currentSession');
  const currentSession = session ? session.value : 2026;
  document.getElementById('currentSession').textContent = currentSession;

  if (currentUser) {
    document.getElementById('userDisplay').textContent = currentUser.name || currentUser.id;
    document.getElementById('roleDisplay').textContent = currentUser.role || 'user';
    
    const adminTab = document.getElementById('adminTab');
    const editorTab = document.getElementById('editorTab');
    const dashTab = document.getElementById('dashTab');
    const studentTab = document.getElementById('studentTab');
    
    if (currentUser.role === 'admin') {
      adminTab.style.display = 'inline-flex';
      editorTab.style.display = 'none';
      dashTab.style.display = 'none';
      studentTab.style.display = 'none';
      document.querySelector('[data-page="pageDashboard"]').style.display = 'none';
      document.querySelector('[data-page="pageEditor"]').style.display = 'none';
      document.querySelector('[data-page="pageAdmin"]').style.display = 'inline-flex';
      document.querySelector('[data-page="pageStudentPortal"]').style.display = 'none';
      document.querySelector('[data-page="pageLogin"]').style.display = 'none';
      document.querySelector('[data-page="pageSignup"]').style.display = 'none';
      document.querySelector('[data-page="pageResult"]').style.display = 'inline-flex';
      
      const active = document.querySelector('.page.active-page');
      if (active && (active.id === 'pageLogin' || active.id === 'pageSignup')) {
        showPage('pageAdmin');
      }
      await renderAdmin('students');
      
    } else if (currentUser.role === 'editor') {
      editorTab.style.display = 'inline-flex';
      adminTab.style.display = 'none';
      dashTab.style.display = 'none';
      studentTab.style.display = 'none';
      document.querySelector('[data-page="pageDashboard"]').style.display = 'none';
      document.querySelector('[data-page="pageEditor"]').style.display = 'inline-flex';
      document.querySelector('[data-page="pageAdmin"]').style.display = 'none';
      document.querySelector('[data-page="pageStudentPortal"]').style.display = 'none';
      document.querySelector('[data-page="pageLogin"]').style.display = 'none';
      document.querySelector('[data-page="pageSignup"]').style.display = 'none';
      document.querySelector('[data-page="pageResult"]').style.display = 'inline-flex';
      
      const active = document.querySelector('.page.active-page');
      if (active && (active.id === 'pageLogin' || active.id === 'pageSignup')) {
        showPage('pageEditor');
      }
      await renderEditor('students');
      
    } else if (currentUser.role === 'teacher') {
      dashTab.style.display = 'inline-flex';
      adminTab.style.display = 'none';
      editorTab.style.display = 'none';
      studentTab.style.display = 'none';
      document.querySelector('[data-page="pageDashboard"]').style.display = 'inline-flex';
      document.querySelector('[data-page="pageEditor"]').style.display = 'none';
      document.querySelector('[data-page="pageAdmin"]').style.display = 'none';
      document.querySelector('[data-page="pageStudentPortal"]').style.display = 'none';
      document.querySelector('[data-page="pageLogin"]').style.display = 'none';
      document.querySelector('[data-page="pageSignup"]').style.display = 'none';
      document.querySelector('[data-page="pageResult"]').style.display = 'inline-flex';
      
      const active = document.querySelector('.page.active-page');
      if (active && (active.id === 'pageLogin' || active.id === 'pageSignup')) {
        showPage('pageDashboard');
      }
      document.getElementById('dashTeacherName').textContent = currentUser.name;
      document.getElementById('dashTeacherSubject').textContent = currentUser.subject || 'All Subjects';
      await renderDashboard('papers');
      
    } else if (currentUser.role === 'student') {
      studentTab.style.display = 'inline-flex';
      dashTab.style.display = 'none';
      adminTab.style.display = 'none';
      editorTab.style.display = 'none';
      document.querySelector('[data-page="pageDashboard"]').style.display = 'none';
      document.querySelector('[data-page="pageEditor"]').style.display = 'none';
      document.querySelector('[data-page="pageAdmin"]').style.display = 'none';
      document.querySelector('[data-page="pageStudentPortal"]').style.display = 'inline-flex';
      document.querySelector('[data-page="pageLogin"]').style.display = 'none';
      document.querySelector('[data-page="pageSignup"]').style.display = 'none';
      document.querySelector('[data-page="pageResult"]').style.display = 'none';
      
      const active = document.querySelector('.page.active-page');
      if (active && (active.id === 'pageLogin' || active.id === 'pageSignup')) {
        showPage('pageStudentPortal');
      }
      await renderStudentPortal('result');
    }
  } else {
    document.getElementById('userDisplay').textContent = 'Guest';
    document.getElementById('roleDisplay').textContent = 'visitor';
    
    document.getElementById('adminTab').style.display = 'none';
    document.getElementById('editorTab').style.display = 'none';
    document.getElementById('dashTab').style.display = 'inline-flex';
    document.getElementById('studentTab').style.display = 'none';
    
    document.querySelector('[data-page="pageLogin"]').style.display = 'inline-flex';
    document.querySelector('[data-page="pageSignup"]').style.display = 'inline-flex';
    document.querySelector('[data-page="pageDashboard"]').style.display = 'inline-flex';
    document.querySelector('[data-page="pageResult"]').style.display = 'inline-flex';
    document.querySelector('[data-page="pageEditor"]').style.display = 'none';
    document.querySelector('[data-page="pageAdmin"]').style.display = 'none';
    document.querySelector('[data-page="pageStudentPortal"]').style.display = 'none';
    
    showPage('pageLogin');
  }
}

// ============================================================
// EVENT LISTENERS
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  // Login Form
  document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const id = document.getElementById('loginId').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
    
    const result = await handleLogin(id, pass);
    if (result.success) {
      document.getElementById('loginMessage').innerHTML = '';
      await updateUserUI();
      showToast(`Welcome ${result.user.name}!`, 'success');
    } else {
      document.getElementById('loginMessage').innerHTML = '<i class="fas fa-exclamation-triangle"></i> ' + result.message;
      showToast(result.message, 'error');
    }
  });

  // Signup Form
  document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const city = document.getElementById('signupCity').value.trim();
    const qual = document.getElementById('signupQual').value.trim();
    const exp = document.getElementById('signupExp').value.trim();
    const subject = document.getElementById('signupSubject').value;
    
    if (!name || !city || !qual || !exp) {
      document.getElementById('signupMessage').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Fill all fields.';
      return;
    }
    await putData('teacherRequests', { name, city, qual, exp, subject, status: 'pending' });
    document.getElementById('signupMessage').innerHTML = `<i class="fas fa-check"></i> Registered! Admin will review.`;
    document.getElementById('signupForm').reset();
    showToast('✅ Registration submitted!', 'success');
  });

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', logout);

  // Navigation Tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const pageId = this.dataset.page;
      
      if (pageId === 'pageAdmin' && (!currentUser || currentUser.role !== 'admin')) {
        showToast('Admin access only.', 'error');
        return;
      }
      if (pageId === 'pageEditor' && (!currentUser || currentUser.role !== 'editor')) {
        showToast('Editor access only.', 'error');
        return;
      }
      if (pageId === 'pageDashboard' && (!currentUser || currentUser.role !== 'teacher')) {
        showToast('Teacher access only.', 'error');
        return;
      }
      if (pageId === 'pageStudentPortal' && (!currentUser || currentUser.role !== 'student')) {
        showToast('Student access only.', 'error');
        return;
      }
      if ((pageId === 'pageLogin' || pageId === 'pageSignup') && currentUser) {
        showToast('Already logged in.', 'warning');
        return;
      }
      
      showPage(pageId);
    });
  });

  // Dashboard Tabs
  document.getElementById('dashTabPapers').addEventListener('click', () => renderDashboard('papers'));
  document.getElementById('dashTabHistory').addEventListener('click', () => renderDashboard('history'));
  document.getElementById('dashTabRecheck').addEventListener('click', () => renderDashboard('recheck'));

  // Editor Tabs
  document.getElementById('editorTabStudents').addEventListener('click', () => renderEditor('students'));
  document.getElementById('editorTabCreate').addEventListener('click', () => renderEditor('create'));
  document.getElementById('editorTabUpload').addEventListener('click', () => renderEditor('upload'));
  document.getElementById('editorTabPublished').addEventListener('click', () => renderEditor('published'));
  document.getElementById('editorTabEdit').addEventListener('click', () => renderEditor('edit'));
  document.getElementById('editorTabRecheckPayments').addEventListener('click', () => renderEditor('recheckPayments'));

  // Admin Tabs
  document.getElementById('adminTabStudents').addEventListener('click', () => renderAdmin('students'));
  document.getElementById('adminTabBulkUpload').addEventListener('click', () => renderAdmin('bulkUpload'));
  document.getElementById('adminTabTeachers').addEventListener('click', () => renderAdmin('teachers'));
  document.getElementById('adminTabPapers').addEventListener('click', () => renderAdmin('papers'));
  document.getElementById('adminTabSession').addEventListener('click', () => renderAdmin('session'));
  document.getElementById('adminTabEditors').addEventListener('click', () => renderAdmin('editors'));
  document.getElementById('adminTabLogs').addEventListener('click', () => renderAdmin('logs'));
  document.getElementById('adminTabRecheck').addEventListener('click', () => renderAdmin('recheck'));

  // Student Portal Tabs
  document.getElementById('studentTabResult').addEventListener('click', () => renderStudentPortal('result'));
  document.getElementById('studentTabProfile').addEventListener('click', () => renderStudentPortal('profile'));
  document.getElementById('studentTabRecheck').addEventListener('click', () => renderStudentPortal('recheck'));
  document.getElementById('studentTabHistory').addEventListener('click', () => renderStudentPortal('history'));

  // Result Search
  document.getElementById('searchResultBtn').addEventListener('click', async function() {
    const roll = parseInt(document.getElementById('rollSearch').value.trim());
    if (isNaN(roll)) {
      document.getElementById('resultDisplay').innerHTML = `<div class="stat-card"><p>⚠️ Enter valid roll number</p></div>`;
      return;
    }

    const published = await getData('settings', 'resultsPublished');
    const isPublished = published ? published.value : false;
    
    if (!isPublished) {
      document.getElementById('resultDisplay').innerHTML = `
        <div class="stat-card"><p><i class="fas fa-clock" style="color:#f39c12;"></i> Results not published yet. Coming Soon!</p></div>
      `;
      return;
    }

    const sheet = await getData('resultSheets', roll);
    if (!sheet || !sheet.uploaded) {
      document.getElementById('resultDisplay').innerHTML = `<div class="stat-card"><p>❌ No result found for roll ${roll}</p></div>`;
      return;
    }

    const student = await getData('students', roll);
    const grade = getGrade(sheet.percentage);
    let html = `<div class="result-sheet">
      <div class="header">
        <h2>HBS · Hazara Board</h2>
        <p>Official Result Sheet - Session ${sheet.session}</p>
      </div>
      <div class="row"><span class="label">Roll Number</span><span class="value">${sheet.roll}</span></div>
      <div class="row"><span class="label">Student Name</span><span class="value">${sheet.name}</span></div>
      <div class="row"><span class="label">Father's Name</span><span class="value">${student ? student.fatherName : 'N/A'}</span></div>
      <div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>`;
    
    for (const [sub, marks] of Object.entries(sheet.marks)) {
      html += `<div class="row"><span class="label">${sub}</span><span class="value">${marks} / 50</span></div>`;
    }
    
    html += `<div style="margin:1rem 0; border-top:2px solid #1e3b5a;"></div>
      <div class="row"><span class="label">Total Marks</span><span class="value">${sheet.total} / 300</span></div>
      <div class="row"><span class="label">Percentage</span><span class="value">${sheet.percentage}%</span></div>
      <div class="row"><span class="label">Grade</span><span class="value ${grade.color}">${grade.grade}</span></div>
      <div class="stamp"><i class="fas fa-stamp"></i> Editor: ${sheet.editor || 'HBS'}</div>
    </div>`;
    document.getElementById('resultDisplay').innerHTML = html;
  });
});

// ============================================================
// APP INITIALIZATION
// ============================================================

(async function init() {
  try {
    await initDB();
    await initializeData();
    currentUser = null;
    await updateUserUI();
    showToast('🚀 HBS System Ready!', 'info');
  } catch (err) {
    console.error('Init error:', err);
    document.body.innerHTML = `<div style="padding:2rem;text-align:center;color:#a33;">Error loading database. Please refresh.</div>`;
  }
})();