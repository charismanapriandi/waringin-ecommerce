import Container from "./Container"

const Footer = () => {
    return (
        <footer className="flex bg-background-900">
            <Container>
                <div className="flex justify-around p-4">
                    <ul>
                        <li className="font-bold text-xl">Brand</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer