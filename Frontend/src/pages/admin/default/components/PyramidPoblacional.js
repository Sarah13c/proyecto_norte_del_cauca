import React from "react";
import {
  Box,
  Flex,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card.js";
import PyramidChart from "../../../../components/charts/common/PyramidChart.js";

export default function PyramidPoblacional({ pyramidData, selectedMunicipio, handleMunicipioChange, ...rest }) {
  // Lista de municipios disponibles
  const municipios = pyramidData ? [...new Set(pyramidData.map(entry => entry.municipio))] : [];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Convertir "Santander De Quilichao" a "Santander de Quilichao"
  const formattedSelectedMunicipio = selectedMunicipio === "Santander De Quilichao" ? "Santander de Quilichao" : selectedMunicipio;

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Piramide Poblacional por Municipios
        </Text>
      </Flex>

      <Box mt='20px'>
        {pyramidData && (
          <Flex justify='center'>
            <Select
              placeholder="Todos los municipios"
              value={formattedSelectedMunicipio}
              onChange={handleMunicipioChange}
              bg="white"
              color={textColor}
              borderColor="secondaryGray.400"
              _hover={{ borderColor: "secondaryGray.600" }}
              _focus={{ borderColor: "secondaryGray.600" }}
            >
              {municipios.map(municipio => (
                <option key={municipio} value={municipio}>{municipio}</option>
              ))}
            </Select>
          </Flex>
        )}
      </Box>

      
        {pyramidData && (
          <PyramidChart data={pyramidData} selectedMunicipio={selectedMunicipio} />
        )}
      
    </Card>
  );
}

