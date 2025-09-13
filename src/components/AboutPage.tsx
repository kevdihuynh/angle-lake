import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css'
import './Footer.css'

const AboutPage: React.FC = () => {
  const clubOfficers = [
    {
      title: 'Treasurer',
      name: 'Sid Sherman',
      phone: '(206) 555-0101',
      email: 'sid@anglelakemanor.com'
    },
    {
      title: 'President & Beach Lot Manager',
      name: 'Terri Sue Stockinger',
      phone: '(206) 555-0102',
      email: 'terri@anglelakemanor.com'
    },
    {
      title: 'VP Of Administration',
      name: 'Rick Smith',
      phone: '(206) 555-0103',
      email: 'rick@anglelakemanor.com'
    },
    {
      title: 'Secretary',
      name: 'Jill Carlson',
      phone: '(206) 555-0104',
      email: 'jill@anglelakemanor.com'
    },
    {
      title: 'VP Of Architectural Control Committee',
      name: 'Kyle Marshall',
      phone: '(206) 555-0105',
      email: 'kyle@anglelakemanor.com'
    }
  ]

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Club Officers Section */}
        <section id="officers" className="club-officers-section">
          <div className="container">
            <div className="section-header">
              <h2>CLUB OFFICERS</h2>
            </div>
            <div className="officers-grid">
              {clubOfficers.map((officer, index) => (
                <div key={index} className="officer-card">
                  <div className="officer-icon">👤</div>
                  <h4>{officer.title}</h4>
                  <p className="officer-name">{officer.name}</p>
                  <p className="officer-contact">{officer.phone}</p>
                  <p className="officer-contact">{officer.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <section id="legal" className="legal-section">
          <div className="container">
            <div className="section-header">
              <h2>LEGAL (COVENANTS, BYLAWS, ETC.)</h2>
            </div>
            
            <div className="legal-content">
              <div className="legal-subsection">
                <h3>COVENANTS</h3>
                <div className="document-viewer">
                  <div className="document-header">
                    <h4>WASHINGTON STATE RECORDER'S Cover Sheet</h4>
                    <div className="document-controls">
                      <button>🔍</button>
                      <button>⬇️</button>
                      <button>🖨️</button>
                      <button>⛶</button>
                    </div>
                  </div>
                  <div className="document-content">
                    <p><strong>Return Address:</strong> Scott H... 17208 30th Ave S Seattle, WA 98188</p>
                    <div className="barcode">20120827000664</div>
                    <p><strong>RECORDS, B&M MISC PAGE 1 OF 009 08/27/2012 11:18 KING COUNTY, WA</strong></p>
                    <p>Please print or type information WASHINGTON STATE RECORDER'S Cover Sheet (RCW 65.04)</p>
                    <p><strong>Document Title(s) (or transactions contained therein):</strong></p>
                  </div>
                </div>
                <div className="section-button">
                  <button className="btn btn-primary">DOWNLOAD CONVENANTS</button>
                </div>
              </div>

              <div className="legal-subsection">
                <h3>BYLAWS</h3>
                <div className="document-viewer">
                  <div className="document-header">
                    <h4>ANGLE LAKE MANOR COMMUNITY CLUB BYLAWS</h4>
                    <div className="document-controls">
                      <button>🔍</button>
                      <button>⬇️</button>
                      <button>🖨️</button>
                      <button>⛶</button>
                    </div>
                  </div>
                  <div className="document-content">
                    <p><strong>ARTICLE II</strong></p>
                    <p>Purpose and Objectives</p>
                    <p><strong>ARTICLE III</strong></p>
                    <p>Membership and Voting Rights</p>
                    <p><strong>ARTICLE IV</strong></p>
                    <p>Board of Directors</p>
                    <p><strong>Membership</strong></p>
                    <p>Eligibility requirements and membership procedures...</p>
                  </div>
                </div>
                <div className="section-button">
                  <button className="btn btn-primary">DOWNLOAD BYLAWS</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beach Lot Rules Section */}
        <section id="beach-rules" className="beach-rules-section">
          <div className="container">
            <div className="section-header">
              <h2>BEACH LOT RULES</h2>
            </div>
            
            <div className="rules-content">
              <div className="rules-subsection">
                <h3>Private Beach Rules - Posted</h3>
                <ul className="rules-list">
                  <li>Guests must be accompanied by a member.</li>
                  <li>Children must be accompanied by a parent. Not responsible for accidents.</li>
                  <li>No pets allowed.</li>
                  <li>Gates must be locked at all times.</li>
                  <li>No boat storage at lot.</li>
                  <li>Beach lot closes at 10 PM.</li>
                  <li>After boat launching, vehicles and trailers must be removed from beach lot.</li>
                  <li>Parking for owners only.</li>
                </ul>
              </div>

              <div className="rules-subsection">
                <h3>Private Beach Rules - Addendum</h3>
                <ol className="rules-numbered-list">
                  <li>Access to the beach lot is restricted to members only during designated hours.</li>
                  <li>All gates must be secured immediately after entry or exit.</li>
                  <li>Guests must be accompanied by a member at all times.</li>
                  <li>Children under 12 must be supervised by a parent or guardian.</li>
                  <li>Members are responsible for the conduct of their guests.</li>
                  <li>No pets are permitted on the beach lot premises.</li>
                  <li>Enforcement of these rules is the responsibility of the Beach Committee.</li>
                  <li>Violations should be reported to the Beach Committee Chair.</li>
                  <li>Complaints will be investigated within 48 hours.</li>
                  <li>Penalties for violations may include temporary suspension of beach privileges.</li>
                  <li>Repeated violations may result in permanent loss of beach access.</li>
                  <li>Appeals may be made to the Board of Directors within 7 days.</li>
                  <li>Emergency situations should be reported immediately to security.</li>
                  <li>All members must carry their access card at all times.</li>
                  <li>Lost or stolen access cards must be reported immediately.</li>
                  <li>Replacement cards are available for a $25 fee.</li>
                  <li>Beach lot hours are 6 AM to 10 PM daily.</li>
                  <li>Special events may require advance notice and approval.</li>
                  <li>Maintenance work will be posted 24 hours in advance.</li>
                  <li>These rules may be amended by majority vote of the Board.</li>
                  <li>All members are responsible for reading and understanding these rules.</li>
                </ol>
              </div>

              <div className="rules-subsection">
                <h3>Definitions:</h3>
                <div className="definitions">
                  <p><strong>Member (Owner):</strong> Defined by property ownership and current dues payment.</p>
                  <p><strong>Children:</strong> Legal dependents aged 12 and under.</p>
                  <p><strong>Young adults:</strong> Legal dependents aged 13 and over.</p>
                  <p><strong>Caregiver:</strong> A person legally employed by a Member.</p>
                  <p><strong>Guests:</strong> Anyone not defined above.</p>
                  <p><strong>The Public:</strong> Anyone not defined above.</p>
                </div>
              </div>

              <div className="rules-subsection">
                <h3>Foundation for Community Beach Lot rules:</h3>
                <div className="foundation-text">
                  <p>The community beach lot is a shared resource owned collectively by all members of Angle Lake Manor. This shared ownership comes with shared responsibilities and restrictions designed to protect the investment and ensure fair access for all members.</p>
                  <p>Homeowner's insurance policies typically cover liability for accidents that occur on the property, but this coverage is contingent upon adherence to established safety rules and proper maintenance of the facility.</p>
                  <p>The covenants and restrictions governing the beach lot are legally binding and enforceable. These rules are designed to maintain property values, ensure safety, and provide a pleasant environment for all residents.</p>
                  <p>Public access to the beach lot is strictly prohibited. The facility is maintained through member dues and is intended solely for the use and enjoyment of current members in good standing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage

