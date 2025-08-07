type GeometricControlsProps = {
    modelPaths : string[],
    setActiveGeometry : React.Dispatch<React.SetStateAction<number>>
}

export const NavigationPanel = ({modelPaths, setActiveGeometry} : GeometricControlsProps) => {
    const advanceToNextModel = () => setActiveGeometry((previousIndex) => (previousIndex + 1) % modelPaths.length);
    const revertToPreviousModel = () => setActiveGeometry((previousIndex) => (previousIndex - 1 + modelPaths.length) % modelPaths.length);

    const controlPanelStyles = {
        marginTop: 20,
        padding: '15px 25px',
        backgroundColor: '#2c3e50',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const buttonStyles = {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#3498db',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '80px'
    };

    const buttonHoverStyles = {
        backgroundColor: '#2980b9',
        transform: 'translateY(-2px)'
    };

    return (
        <div style={controlPanelStyles}>
            <button 
                onClick={revertToPreviousModel}
                style={buttonStyles}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor;
                    e.currentTarget.style.transform = buttonHoverStyles.transform;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor;
                    e.currentTarget.style.transform = 'translateY(0px)';
                }}
            >
                ← Previous
            </button>
            <button 
                onClick={advanceToNextModel}
                style={buttonStyles}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor;
                    e.currentTarget.style.transform = buttonHoverStyles.transform;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor;
                    e.currentTarget.style.transform = 'translateY(0px)';
                }}
            >
                Next →
            </button>
        </div>
    );
}; 