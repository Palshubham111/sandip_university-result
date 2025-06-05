import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Header from './Header';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || location.state?.resultData;

  if (!item) {
    return (
      <div className="error-container" style={{ 
        textAlign: 'center', 
        padding: '2rem',
        marginTop: '2rem' 
      }}>
        <div className="error-message" style={{
          color: '#dc2626',
          fontSize: '1.1rem',
          marginBottom: '1rem'
        }}>
          No result data found
        </div>
        <div className="error-details" style={{
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          Please ensure you have accessed this page through proper navigation.
        </div>
      </div>
    );
  }

  const Downloadpdf = async (e) => {
    e.preventDefault();
    const button = e.target;
    
    try {
      button.textContent = 'Generating PDF...';
      button.disabled = true;

      // Create a new PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Add header
      pdf.setFontSize(20);
      pdf.text('Sandip University', 105, 20, { align: 'center' });
      pdf.setFontSize(12);
      pdf.text('Mahiravni Trimbak road nashik -422 213', 105, 30, { align: 'center' });
      pdf.text('website www.sandip university edu.in', 105, 35, { align: 'center' });

      // Add exam header
      pdf.setFontSize(14);
      pdf.text('END SEMISTER EXAMINATIONS -MAY 2025', 105, 45, { align: 'center' });
      pdf.setFontSize(16);
      pdf.text('RESULT', 105, 55, { align: 'center' });

      // Add student details
      pdf.setFontSize(12);
      const details = [
        ['PRN', item?.prn || 'N/A'],
        ['Student\'s Name', item?.name || 'N/A'],
        ['Degree & Branch', item?.degree || 'N/A'],
        ['Semester', item?.semester || 'N/A'],
        ['GPA', item?.gpa || 'N/A'],
        ['Date of Birth', item?.dob || 'N/A']
      ];

      let y = 65;
      details.forEach(([label, value]) => {
        pdf.text(label + ': ' + value, 20, y);
        y += 10;
      });

      // Add course details
      y += 10;
      pdf.setFontSize(14);
      pdf.text('Course Details', 105, y, { align: 'center' });
      y += 10;

      const courses = [
        ['PMC301', 'Operations Research', 'A', 'Very Good'],
        ['PMC302', 'Artificial Intelligence and Machine Learning', 'A', 'Very Good'],
        ['PMC303', 'Python Programming', 'A', 'Very Good'],
        ['PMC304', 'Object Oriented Analysis and Design', 'A', 'Very Good'],
        ['PMC305', 'Linux Administration', 'A', 'Very Good'],
        ['PMC311', 'Lab Course Based on Python Programming', 'A+', 'Excellent'],
        ['PMC312', 'Lab Course Based on Linux Administration', 'A', 'Very Good'],
        ['PMC313', 'Research Methodology with Writing Research Paper', 'A+', 'Excellent'],
        ['PMC314', 'Mini Project', 'A+', 'Excellent']
      ];

      // Add table headers
      pdf.setFontSize(12);
      const headers = ['Course Code', 'Course Name', 'Grade', 'Result'];
      const colWidths = [30, 100, 30, 30];
      let x = 20;

      headers.forEach((header, i) => {
        pdf.text(header, x, y);
        x += colWidths[i];
      });

      // Add course rows
      y += 10;
      courses.forEach(course => {
        if (y > 270) { // Check if we need a new page
          pdf.addPage();
          y = 20;
        }
        x = 20;
        course.forEach((value, i) => {
          pdf.text(value, x, y);
          x += colWidths[i];
        });
        y += 10;
      });

      // Save the PDF
      pdf.save(`${item?.prn || 'result'}.pdf`);

      // Navigate to home page after successful download
      setTimeout(() => {
        navigate('/');
      }, 1000); // Wait for 1 second to ensure PDF is saved

    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      button.textContent = 'Download';
      button.disabled = false;
    }
  };

  return (<>
    <Header/>
    <div style={{ marginBottom: '2.5rem' }}>
      <div id="result-content" className="pdf-content">
        <div className="pdf-header">
          <img 
            className="pdf-logo" 
            src="https://play-lh.googleusercontent.com/jNyk6emTQfLKe0OHoZtnKm0g2L3ZQXWHkxrd_4Bb18rghUhPKJ8E0rcBY4KH-YVpNg=w240-h480-rw" 
            alt="University Logo"
            crossOrigin="anonymous"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/100x100?text=Logo';
            }}
          />
          <div>
            <h2 style={{ fontWeight: 'bold' }}>Sandip University</h2>
            <p style={{ fontFamily: 'monospace' }}>Mahiravni Trimbak road nashik -422 213 website www.sandip university edu.in</p>
          </div>
        </div>
        
        <div className="pdf-exam-header">
          <p style={{ fontWeight: 'bold' }}>END SEMISTER EXAMINATIONS -MAY 2025</p>
          <h6 style={{ fontWeight: 'bold' }}>RESULT</h6>
        </div>
  
        <table className="pdf-table">
          <tbody>
            <tr className="trd">
              <th>PRN</th>
              <td>{item?.prn || 'N/A'}</td>
            </tr>
            <tr className="trd">
              <th>Student's Name</th>
              <td>{item?.name || 'N/A'}</td>
            </tr>
            <tr className="trd">
              <th>Degree & Branch</th>
              <td>{item?.degree || 'N/A'}</td>
            </tr>
            <tr className="trd">
              <th>Semester</th>
              <td>{item?.semester || 'N/A'}</td>
            </tr>
            <tr className="trd">
              <th>GPA</th>
              <td>{item?.gpa || 'N/A'}</td>
            </tr>
            <tr className="trd">
              <th>Date of Birth</th>
              <td>{item?.dob || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        
        <table className="pdf-table">
          <thead>
            <tr className="course">
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="course">
              <td>PMC301</td>
              <td>Operations Research</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC302</td>
              <td>Artificial Intelligence and Machine Learning</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC303</td>
              <td>Python Programming</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC304</td>
              <td>Object Oriented Analysis and Design</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC305</td>
              <td>Linux Administration</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC311</td>
              <td>Lab Course Based on Python Programming</td>
              <td>A+</td>
              <td>Excellent</td>
            </tr>
            <tr className="course">
              <td>PMC312</td>
              <td>Lab Course Based on Linux Administration</td>
              <td>A</td>
              <td>Very Good</td>
            </tr>
            <tr className="course">
              <td>PMC313</td>
              <td>Research Methodology with Writing Research Paper</td>
              <td>A+</td>
              <td>Excellent</td>
            </tr>
            <tr className="course"> 
              <td>PMC314</td>
              <td>Mini Project</td>
              <td>A+</td>
              <td>Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-6'>
        <button 
          onClick={Downloadpdf}
          className='btn cursor-pointer'
          style={{
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Download
        </button>
      </div>
    </div>
  </>);
}

export default Result;

