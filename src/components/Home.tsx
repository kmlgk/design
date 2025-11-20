import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [selectedApp, setSelectedApp] = useState('Mobile');
  const [supplyType, setSupplyType] = useState('DC');
  const [vinMin, setVinMin] = useState('14');
  const [vinMax, setVinMax] = useState('22');
  const [vout, setVout] = useState('3.3');
  const [ioutMax, setIoutMax] = useState('2');
  const [isolatedOutput, setIsolatedOutput] = useState(false);
  const [designType, setDesignType] = useState('Balanced');
  const [inputAdvancedOpen, setInputAdvancedOpen] = useState(false);
  const [outputAdvancedOpen, setOutputAdvancedOpen] = useState(false);
  const [designParamsOpen, setDesignParamsOpen] = useState(false);
  const [systemSpecsOpen, setSystemSpecsOpen] = useState(false);

  const applications = [
    'Mobile',
    'PMIC',
    'Modem',
    'Automobile',
    'Server',
    'Data-Center',
    'Power Design',
    'Sensor Design'
  ];

  const systemSpecs = [
    { name: 'CPU Subsystem', value: '' },
    { name: 'GPU/Graphics', value: '' },
    { name: 'NPU/AI Accelerator', value: '' },
    { name: 'ISP/Image Signal Processor', value: '' },
    { name: 'Multimedia', value: '' },
    { name: 'Memory and Storage', value: '' },
    { name: 'Connectivity', value: '' },
    { name: 'Security', value: '' },
    { name: 'Power Management', value: '' },
    { name: 'I/O Peripherals', value: '' }
  ];

  const designTemplates = [
    { name: 'Smartphone', icon: '📱' },
    { name: 'Multimedia', icon: '🎬' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'AI Interface', icon: '🤖' },
    { name: 'Camera', icon: '📷' },
    { name: 'Display', icon: '🖥️' },
    { name: 'Sensors', icon: '📡' },
    { name: 'Custom', icon: '⚙️' }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Chip Design Architecture (CDA) - Power Designer</h1>
        <p className="hero-description">
          WEBENCH<sup>®</sup> Power Designer creates customized power supply circuits based on your application requirements.
          Design optimized power solutions for Mobile, Automotive, Server, and IoT applications with performance and interface targets.
          <a href="#learn" className="learn-more"> Learn more</a>
        </p>

        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Part Number" className="search-input" />
          </div>
        </div>
      </div>

      {/* Application Selection */}
      <div className="section application-section">
        <h2 className="section-title">Application Type</h2>
        <p className="section-description">Select your target application for optimized power design</p>
        <div className="application-grid">
          {applications.map((app) => (
            <button
              key={app}
              className={`app-card ${selectedApp === app ? 'active' : ''}`}
              onClick={() => setSelectedApp(app)}
            >
              <span className="app-icon">
                {app === 'Mobile' && '📱'}
                {app === 'PMIC' && '⚡'}
                {app === 'Modem' && '📡'}
                {app === 'Automobile' && '🚗'}
                {app === 'Server' && '🖥️'}
                {app === 'Data-Center' && '🏢'}
                {app === 'Power Design' && '🔋'}
                {app === 'Sensor Design' && '📊'}
              </span>
              <span className="app-name">{app}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Specifications */}
      <div className="section system-specs-section">
        <button
          className="advanced-toggle"
          onClick={() => setSystemSpecsOpen(!systemSpecsOpen)}
        >
          <span>⚙️ System Specifications - Performance and Interface Targets</span>
          <span className={`arrow ${systemSpecsOpen ? 'open' : ''}`}>▼</span>
        </button>
        {systemSpecsOpen && (
          <div className="advanced-content">
            <p className="specs-description">Define performance requirements for your {selectedApp} application</p>
            <div className="specs-grid">
              {systemSpecs.map((spec, index) => (
                <div key={index} className="form-group">
                  <label className="form-label">{spec.name}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Specify requirements"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="design-sections">
        {/* Input Section */}
        <div className="section input-section">
          <h2 className="section-title">Input</h2>

          <div className="form-group">
            <label className="form-label">Supply type is</label>
            <div className="toggle-group">
              <button
                className={`toggle-btn ${supplyType === 'DC' ? 'active' : ''}`}
                onClick={() => setSupplyType('DC')}
              >
                DC
              </button>
              <button
                className={`toggle-btn ${supplyType === 'AC' ? 'active' : ''}`}
                onClick={() => setSupplyType('AC')}
              >
                AC
              </button>
            </div>
          </div>

          <div className="input-grid">
            <div className="form-group">
              <label className="form-label">
                Vin Min <span className="required">*</span>
              </label>
              <div className="input-with-unit">
                <input
                  type="number"
                  value={vinMin}
                  onChange={(e) => setVinMin(e.target.value)}
                  className="form-input"
                />
                <span className="unit">V</span>
              </div>
              <span className="input-range">(-50 - 1000)</span>
            </div>

            <div className="form-group">
              <label className="form-label">
                Vin Max <span className="required">*</span>
              </label>
              <div className="input-with-unit">
                <input
                  type="number"
                  value={vinMax}
                  onChange={(e) => setVinMax(e.target.value)}
                  className="form-input"
                />
                <span className="unit">V</span>
              </div>
              <span className="input-range">(-50 - 1000)</span>
            </div>
          </div>

          <div className="advanced-section">
            <button
              className="advanced-toggle"
              onClick={() => setInputAdvancedOpen(!inputAdvancedOpen)}
            >
              <span>Advanced</span>
              <span className={`arrow ${inputAdvancedOpen ? 'open' : ''}`}>▼</span>
            </button>
            {inputAdvancedOpen && (
              <div className="advanced-content">
                <div className="form-group">
                  <label className="form-label">Input Capacitance</label>
                  <div className="input-with-unit">
                    <input type="number" className="form-input" placeholder="Auto" />
                    <span className="unit">µF</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Operating Temperature Range</label>
                  <div className="temp-range">
                    <input type="number" className="form-input" placeholder="0" />
                    <span className="unit">°C to</span>
                    <input type="number" className="form-input" placeholder="85" />
                    <span className="unit">°C</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="section output-section">
          <h2 className="section-title">Output</h2>

          <div className="input-grid">
            <div className="form-group">
              <label className="form-label">
                Vout <span className="required">*</span>
              </label>
              <div className="input-with-unit">
                <input
                  type="number"
                  value={vout}
                  onChange={(e) => setVout(e.target.value)}
                  className="form-input"
                />
                <span className="unit">V</span>
              </div>
              <span className="input-range">(80 - 1000)</span>
            </div>

            <div className="form-group">
              <label className="form-label">
                Iout Max <span className="required">*</span>
              </label>
              <div className="input-with-unit">
                <input
                  type="number"
                  value={ioutMax}
                  onChange={(e) => setIoutMax(e.target.value)}
                  className="form-input"
                />
                <span className="unit">A</span>
              </div>
              <span className="input-range">(0 - 180)</span>
            </div>
          </div>

          <div className="form-group">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isolatedOutput}
                onChange={(e) => setIsolatedOutput(e.target.checked)}
              />
              <span className="slider"></span>
              <span className="toggle-label">Isolated Output</span>
            </label>
          </div>

          <div className="advanced-section">
            <button
              className="advanced-toggle"
              onClick={() => setOutputAdvancedOpen(!outputAdvancedOpen)}
            >
              <span>Advanced</span>
              <span className={`arrow ${outputAdvancedOpen ? 'open' : ''}`}>▼</span>
            </button>
            {outputAdvancedOpen && (
              <div className="advanced-content">
                <div className="form-group">
                  <label className="form-label">Output Ripple Voltage</label>
                  <div className="input-with-unit">
                    <input type="number" className="form-input" placeholder="Auto" />
                    <span className="unit">mV</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Transient Response</label>
                  <select className="form-input">
                    <option>Standard</option>
                    <option>Fast</option>
                    <option>Very Fast</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Design Consideration Section */}
      <div className="section design-consideration">
        <h2 className="section-title">Design Consideration</h2>

        <div className="form-group">
          <label className="form-label">I want my design to be</label>
          <div className="design-options">
            <button
              className={`option-btn ${designType === 'Balanced' ? 'active' : ''}`}
              onClick={() => setDesignType('Balanced')}
            >
              Balanced
            </button>
            <button
              className={`option-btn ${designType === 'Low Cost' ? 'active' : ''}`}
              onClick={() => setDesignType('Low Cost')}
            >
              Low Cost
            </button>
            <button
              className={`option-btn ${designType === 'High Efficiency' ? 'active' : ''}`}
              onClick={() => setDesignType('High Efficiency')}
            >
              High Efficiency
            </button>
            <button
              className={`option-btn ${designType === 'Small Footprint' ? 'active' : ''}`}
              onClick={() => setDesignType('Small Footprint')}
            >
              Small Footprint
            </button>
          </div>
        </div>

        <div className="advanced-section">
          <button
            className="advanced-toggle"
            onClick={() => setDesignParamsOpen(!designParamsOpen)}
          >
            <span>Design Parameters</span>
            <span className={`arrow ${designParamsOpen ? 'open' : ''}`}>▼</span>
          </button>
          {designParamsOpen && (
            <div className="advanced-content">
              <div className="form-group">
                <label className="form-label">Switching Frequency</label>
                <select className="form-input">
                  <option>Auto Select</option>
                  <option>200 kHz</option>
                  <option>300 kHz</option>
                  <option>400 kHz</option>
                  <option>500 kHz</option>
                  <option>1 MHz</option>
                  <option>2 MHz</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Topology Preference</label>
                <select className="form-input">
                  <option>No Preference</option>
                  <option>Buck</option>
                  <option>Boost</option>
                  <option>Buck-Boost</option>
                  <option>SEPIC</option>
                  <option>Flyback</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">IC Manufacturer</label>
                <select className="form-input">
                  <option>All Manufacturers</option>
                  <option>Texas Instruments</option>
                  <option>Analog Devices</option>
                  <option>Maxim Integrated</option>
                  <option>ON Semiconductor</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Maximum Solution Height</label>
                <div className="input-with-unit">
                  <input type="number" className="form-input" placeholder="No Limit" />
                  <span className="unit">mm</span>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Reliability Testing</label>
                <select className="form-input">
                  <option>Standard</option>
                  <option>Automotive Grade</option>
                  <option>Industrial</option>
                  <option>Military/Aerospace</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Design Templates Section */}
      <div className="section templates-section">
        <h2 className="section-title">My Designs - Quick Templates</h2>
        <p className="section-description">Start with a pre-configured template or create a custom design</p>
        <div className="templates-grid">
          {designTemplates.map((template) => (
            <button key={template.name} className="template-card">
              <span className="template-icon">{template.icon}</span>
              <span className="template-name">{template.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="action-section">
        <button className="view-designs-btn">VIEW DESIGNS</button>
      </div>
    </div>
  );
};

export default Home;
