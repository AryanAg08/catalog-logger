import React, { useContext, useEffect, useState } from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
// Import images
import clothingImage from '/assets/clothing.jpg';
import backImage from '/assets/back.png';
import { useLocation } from 'react-router-dom';
import { makeRequest } from '../axios';
import { AuthContext } from '../context/authContext';

// Styles for PDF document
const styles = {
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    product: {
        marginBottom: 10,
    },
    productDetails: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 14,
        marginBottom: 10,
    },
};


const ProductPDF = ({ product }) => (
    <View style={styles.product}>
        <Text style={styles.productDetails}>{product.name}</Text>
        <Text style={styles.productDetails}>{product.location}</Text>
        <Text style={styles.productDetails}>{product.category}</Text>
        <Text style={styles.productDetails}>{product.price}</Text>
        <Text style={styles.productDetails}>{product.image}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
    </View>
);

const CataloguePDF = ({ catalogue }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>{catalogue.name}</Text>
                {catalogue.products.map((product, index) => (
                    <ProductPDF key={index} product={product} />
                ))}
            </View>
        </Page>
    </Document>
);

// Main component
const PrintCatalogue = () => {
    const [catalogueData, setCatalogueData] = useState(null);
    const {currentUser}=useContext(AuthContext);
    const tok={token:currentUser.token}
    // useEffect(() => {
    //     const fetchCatalogueData = async () => {
    //         try {
    //             const response = await makeRequest.get('/product',{params:tok});
    //             setCatalogueData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching catalogue data:', error);
    //         }
    //     };

    //     fetchCatalogueData();
    // }, []);
  console.log(catalogueData)
    const catalogue = {
        name: 'Catalogue 1',
        score: 70,
        products: [
            {
                name: 'Product A',
                location: 'Location A',
                category: 'Category A',
                price: '$100',
                image: clothingImage,
                description: 'Description of Product A',
            },
            {
                name: 'Product B',
                location: 'Location B',
                category: 'Category B',
                price: '$150',
                image: backImage,
                description: 'Description of Product B',
            },
        ]
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className=" flex flex-col bg-gray-200 text-center py-4">
                <h1 className="text-2xl font-bold">{}</h1>
                <div className="flex items-center justify-center text-2xl font-semibold text-gray-800 mb-4">
                    Score: {}/100
                </div>
                <div className="flex items-center justify-center">
                <div className="w-1/2 bg-gray-400 h-8 rounded-full mb-4 overflow-hidden">
                    <div
                        className="bg-green-500 h-full"
                        style={{ width: `${100}%` }}
                    ></div>
                </div>
                </div>
                <div className="flex-1 flex flex-wrap justify-center overflow-y-auto py-4 px-8">
                {catalogue.products.map((product, index) => (
                    <div key={index} className="bg-white rounded-md p-4 shadow-md m-4 max-w-sm">
                        <img src={product.image} alt=""className="w-full h-48 object-cover mb-4" />
                        <div className="text-lg font-semibold mb-2">{product.name}</div>
                        <div className="text-gray-600 mb-2">{product.location}</div>
                        <div className="text-gray-600 mb-2">{product.category}</div>
                        <div className="text-green-500 font-semibold mb-2">{product.price}</div>
                        <p className="text-gray-800">{product.description}</p>
                    </div>
                ))}
            </div>
                <PDFDownloadLink document={<CataloguePDF catalogue={catalogue} />} fileName={`${catalogue.name}.pdf`}>
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                </PDFDownloadLink>
            </div>
        </div>
    );
}

export default PrintCatalogue;
